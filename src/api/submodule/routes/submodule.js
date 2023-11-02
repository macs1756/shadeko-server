'use strict';

/**
 * submodule router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::submodule.submodule');
