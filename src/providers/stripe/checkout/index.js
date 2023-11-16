const buildCheckout = require('./src/checkout');
module.exports = function
(
    {
        stripe
    }
)
    {

        const checkout  = buildCheckout(
            {
                stripe: stripe
            }
        );

        const services = Object.freeze(
            {
                checkout
            }
        );

        return services;
    }