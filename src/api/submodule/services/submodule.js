'use strict';

/**
 * submodule service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::submodule.submodule');
