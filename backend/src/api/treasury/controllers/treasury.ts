/**
 * treasury controller
 */

import { factories } from '@strapi/strapi';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import type { Core } from '@strapi/types';

dayjs.apply(utcPlugin);

const updateFutureBalances = async (_date: dayjs.ConfigType) => {
  let beforeDate = dayjs(_date).startOf('month').subtract(1, 'month');

  while (true) {
    const afterDate = beforeDate.add(1, 'month');
    const startOfAfter = afterDate.startOf('month');
    const endOfAfter = afterDate.endOf('month');

    let prevBalance = (
      await strapi.entityService.findMany(
        'api::general-balance.general-balance',
        {
          filters: {
            month: {
              $gte: beforeDate.startOf('month').toISOString(),
              $lte: beforeDate.endOf('month').toISOString(),
            },
          },
        },
      )
    )?.[0];

    let nextBalance = (
      await strapi.entityService.findMany(
        'api::general-balance.general-balance',
        {
          filters: {
            month: {
              $gte: startOfAfter.toISOString(),
              $lte: endOfAfter.toISOString(),
            },
          },
        },
      )
    )?.[0];

    if (!nextBalance) break;

    if (prevBalance) {
      const allTransactions = await strapi.entityService.findMany(
        'api::treasury.treasury',
        {
          start: 0,
          limit: 1000,
          filters: {
            date: {
              $gte: startOfAfter.toISOString(),
              $lte: endOfAfter.toISOString(),
            },
          },
        },
      );

      const totalBalance = allTransactions.reduce((acc, curr) => {
        return curr.direction === 'credit'
          ? acc - curr.amount
          : acc + curr.amount;
      }, 0);

      nextBalance.total = totalBalance + Number(prevBalance?.total || 0);
      await strapi.entityService.update(
        'api::general-balance.general-balance',
        nextBalance.id,
        {
          data: {
            total: nextBalance.total,
          },
        },
      );
    }

    beforeDate = beforeDate.add(1, 'month');
  }
};

async function onEditBalance(
  strapi: Core.Strapi,
  _date: dayjs.ConfigType,
  amount: number,
) {
  const date = dayjs(_date).set('days', 15);
  const startOf = date.startOf('month');
  const endOf = date.endOf('month');

  let balance = (
    await strapi.entityService.findMany(
      'api::general-balance.general-balance',
      {
        filters: {
          month: {
            $gte: startOf.toISOString(),
            $lte: endOf.toISOString(),
          },
        },
      },
    )
  )?.[0];

  if (!balance) {
    balance = await strapi.entityService.create(
      'api::general-balance.general-balance',
      {
        data: {
          total: amount,
          month: date.toISOString(),
        },
      },
    );
  } else {
    balance = await strapi.entityService.update(
      'api::general-balance.general-balance',
      balance.id,
      {
        data: {
          total: balance.total + amount,
        },
      },
    );
  }

  return balance;
}

export default factories.createCoreController(
  'api::treasury.treasury',
  ({ strapi }) => ({
    async delete(ctx) {
      const { id } = ctx.params;
      try {
        const response = await strapi.entityService.delete(
          'api::treasury.treasury',
          id,
        );

        await onEditBalance(
          strapi,
          response.date,
          response?.direction === 'credit' ? response.amount : -response.amount,
        );

        await updateFutureBalances(response.date);

        ctx.send({ message: 'Token successfully deleted!' });
      } catch (error) {
        console.log(`Error deleting token with id ${id}: ${error.message}`);
        ctx.throw(500, error?.message ?? 'Failed to delete token');
      }
    },
    async update(ctx) {
      const { id } = ctx.params;
      const { data } = ctx.request.body;

      try {
        const find = await strapi.entityService.findOne(
          'api::treasury.treasury',
          id,
        );
        const response = await strapi.entityService.update(
          'api::treasury.treasury',
          id,
          {
            data,
          },
        );

        const getDifferenceBetweenAmounts = () => {
          const responseAmount =
            response.direction === 'credit'
              ? -response.amount
              : response.amount;
          const findAmount =
            find.direction === 'credit' ? -find.amount : find.amount;

          return responseAmount - findAmount;
        };

        await onEditBalance(
          strapi,
          response.date,
          getDifferenceBetweenAmounts(),
        );

        await updateFutureBalances(data.date);

        ctx.send(response);
      } catch (error) {
        console.log(`Error updated token with id ${id}: ${error.message}`);
        ctx.throw(500, error?.message ?? 'Failed to updated token');
      }
    },
    async create(ctx) {
      const { id } = ctx.params;
      const { data } = ctx.request.body;

      try {
        const response = await strapi.entityService.create(
          'api::treasury.treasury',
          {
            data,
          },
        );

        await onEditBalance(
          strapi,
          data.date,
          data?.direction === 'credit' ? -data.amount : data.amount,
        );

        await updateFutureBalances(data.date);

        ctx.send(response);
      } catch (error) {
        console.log(`Error updated token with id ${id}: ${error.message}`);
        ctx.throw(500, error?.message ?? 'Failed to updated token');
      }
    },
  }),
);
