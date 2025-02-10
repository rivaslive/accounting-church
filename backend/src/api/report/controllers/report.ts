/**
 * report controller
 */

import { factories } from '@strapi/strapi';
import dayjs from 'dayjs';
import esEs from 'dayjs/locale/es';
import {CreateTreasuryReport} from "../../../pdf/create-report";

dayjs.locale(esEs);

export default factories.createCoreController(
  'api::report.report',
  ({ strapi }) => ({
    async create(ctx) {
      const { data } = ctx.request.body;

      try {
        // const response = await strapi.entityService.create('api::report.report', {
        //   data
        // });
        // createReport({
        //   strapi,
        //   type: data.type,
        //   date: data.date,
        // });
        const Report = new CreateTreasuryReport(strapi, dayjs(data.date));
        await Report.create();
        // ctx.send(response);
        ctx.send({});
      } catch (error) {
        console.log(`Error creating token: ${error.message}`);
        ctx.throw(500, error?.message ?? 'Failed to create token');
      }
    },
  }),
);

enum Type {
  TREASURY = 'treasury',
  SMALL_TREASURY = 'small-treasury',
  COLLABORATOR = 'collaborator',
}

