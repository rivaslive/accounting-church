/**
 * collaborator controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::collaborator.collaborator', ({strapi}) => ({
  async delete(ctx) {
    const {id} = ctx.params;
    try {
      await strapi.entityService.delete('api::collaborator.collaborator', id);
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
      const response = await strapi.entityService.update('api::collaborator.collaborator', id, {
        data
      });
      ctx.send(response);
    } catch (error) {
      console.log(`Error updated token with id ${id}: ${error.message}`);
      ctx.throw(500, error?.message ?? 'Failed to updated token');
    }
  },
}));
