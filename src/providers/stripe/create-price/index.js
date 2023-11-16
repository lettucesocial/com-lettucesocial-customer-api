const buildCreatePrice = require('./src/create-price');

module.exports = function
(
    {
        stripe
    }
)
    {

        const createPrice = buildCreatePrice(
            {
                stripe: stripe
            }
        );


        const services = Object.freeze(
            {
                createPrice
            }
        );

        return services;
    }