const buildGetCustomer = require('./src/get-customer');

module.exports = function
(
    {
        stripe
    }
)
    {

        const getCustomer = buildGetCustomer(
            {
                stripe: stripe
            }
        );


        const services = Object.freeze(
            {
                getCustomer
            }
        );

        return services;
    }