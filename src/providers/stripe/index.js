

module.exports = function
(
    {
        STRIPE_SECRET_KEY
    }
)
    {
        if
        (
            !STRIPE_SECRET_KEY
        )
            {
                throw new Error("stripe provider must have STRIPE_SECRET_KEY")
            }
        
        const stripe = require('stripe')(STRIPE_SECRET_KEY);

        const { checkout } = require('./checkout')(
            {
                stripe: stripe
            }
        );

        const { createPaymentLink } = require('./create-payment-link')(
            {
                stripe: stripe
            }
        );

        const { createPrice } = require('./create-price')(
            {
                stripe: stripe
            }
        );

        const { createProduct } = require('./create-product')(
            {
                stripe: stripe
            }
        )


        const services = Object.freeze(
            {
                checkout,
                createPaymentLink,
                createPrice,
                createProduct
            }
        );

        return services;
    }