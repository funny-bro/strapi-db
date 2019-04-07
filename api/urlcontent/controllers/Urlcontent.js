'use strict';

/**
 * Urlcontent.js controller
 *
 * @description: A set of functions called "actions" for managing `Urlcontent`.
 */

module.exports = {

  /**
   * Retrieve urlcontent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.urlcontent.search(ctx.query);
    } else {
      return strapi.services.urlcontent.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a urlcontent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.urlcontent.fetch(ctx.params);
  },

  /**
   * Count urlcontent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.urlcontent.count(ctx.query);
  },

  /**
   * Create a/an urlcontent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.urlcontent.add(ctx.request.body);
  },

  /**
   * Update a/an urlcontent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.urlcontent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an urlcontent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.urlcontent.remove(ctx.params);
  }
};
