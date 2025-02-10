/**
 * small-treasury controller
 */

import {factories} from '@strapi/strapi';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import type {Core} from "@strapi/types";

dayjs.apply(utcPlugin);


async function onEditBalance(strapi: Core.Strapi, _date: dayjs.ConfigType, amount: number) {
  const date = dayjs(_date);
  const startOf = date.startOf('month');
  const endOf = date.endOf('month');

  let balance = (await strapi.entityService.findMany('api::small-balance.small-balance', {
    filters: {
      month: {
        $gte: startOf.toISOString(),
        $lte: endOf.toISOString(),
      }
    }
  }))?.[0];

  if (!balance) {
    balance = await strapi.entityService.create('api::small-balance.small-balance', {
      data: {
        total: amount,
        month: date.toISOString(),
      }
    });
  } else {
    balance = await strapi.entityService.update('api::small-balance.small-balance', balance.id, {
      data: {
        total: balance.total + amount,
      }
    });
  }

  return balance;
}

export default factories.createCoreController('api::small-treasury.small-treasury', ({strapi}) => ({
  async delete(ctx) {
    const {id} = ctx.params;
    try {
      const response = await strapi.entityService.delete('api::small-treasury.small-treasury', id);

      await onEditBalance(strapi, response.date, response?.direction === 'credit' ? response.amount : -response.amount)

      ctx.send({message: 'Token successfully deleted!'});
    } catch (error) {
      console.log(`Error deleting token with id ${id}: ${error.message}`);
      ctx.throw(500, error?.message ?? 'Failed to delete token');
    }
  },
  async update(ctx) {
    const {id} = ctx.params;
    const {data} = ctx.request.body;

    try {
      const find = await strapi.entityService.findOne('api::small-treasury.small-treasury', id);
      const response = await strapi.entityService.update('api::small-treasury.small-treasury', id, {
        data
      });

      const getDifferenceBetweenAmounts = () => {
        const responseAmount = response.direction === 'credit' ? -response.amount : response.amount;
        const findAmount = find.direction === 'credit' ? -find.amount : find.amount;

        return responseAmount - findAmount;
      }

      await onEditBalance(strapi, response.date, getDifferenceBetweenAmounts())

      ctx.send(response);
    } catch (error) {
      console.log(`Error updated token with id ${id}: ${error.message}`);
      ctx.throw(500, error?.message ?? 'Failed to updated token');
    }
  },
  async create(ctx) {
    const {id} = ctx.params;
    const {data} = ctx.request.body;

    try {
      const response = await strapi.entityService.create('api::small-treasury.small-treasury', {
        data
      });

      await onEditBalance(strapi, data.date, data?.direction === 'credit' ? -data.amount : data.amount)

      ctx.send(response);
    } catch (error) {
      console.log(`Error updated token with id ${id}: ${error.message}`);
      ctx.throw(500, error?.message ?? 'Failed to updated token');
    }
  },
}));
