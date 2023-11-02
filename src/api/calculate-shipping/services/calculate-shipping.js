'use strict';

/**
 * calculate-shipping service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calculate-shipping.calculate-shipping');
