'use strict';

/**
 * ell service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ell.ell');
