'use strict';

/**
 * unpaid-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unpaid-order.unpaid-order');
