const buildCreateProduct = require('./src/create-product');

module.exports = function
(
    {
        stripe
    }
)
    {

        const createProduct = buildCreateProduct(
            {
                stripe: stripe
            }
        );


        const services = Object.freeze(
            {
                createProduct
            }
        );

        return services;
    }