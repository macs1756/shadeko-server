
const stripe = require('stripe')(process.env.STRIPE_KEY);
'use strict';


/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi})=>({
		async create(ctx){

		const { products,email } = ctx.request.body;


		const lineItems = products.map((product) => {	
			return {
			  price_data: {
				 currency: 'usd',
				 unit_amount: product.price * 100,
				 product_data: {
					name: product.title,
					images: ["https://api.shadeko.eu//uploads/08_091cb69098.jpg"]
				 },
			  },
			  quantity: product.quantity,
			};
		 });


	
		try{
			
			const session = await stripe.checkout.sessions.create({
				mode: 'payment',
				success_url: `${process.env.CLIENT_URL}?success=true`,
				cancel_url: `${process.env.CLIENT_URL}?success=false`,

				customer_email: email,

				line_items: lineItems,
				
				payment_method_types: ['card'], 
				
			});

	  return { stripeSession: session};

		

		}catch(err){
			ctx.response.status = 500;
			return err;
		}

		}
}));


// const order = await strapi.service('api::order.order').create({
// 	data: {
// 		stripeId: 'test33',
// 	}
// });
