const buildCreatePaymentLink = require('./src/create-payment-link');

module.exports = function
(
    {
        stripe
    }
)
    {

        const createPaymentLink = buildCreatePaymentLink(
            {
                stripe: stripe
            }
        );


        const services = Object.freeze(
            {
                createPaymentLink
            }
        );

        return services;
    }