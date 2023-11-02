'use strict';

/**
 * payment-and-refund service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-and-refund.payment-and-refund');
