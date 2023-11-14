const buildCreateOrder = require('./create-order');

module.exports = function
(
    {
        makeOrder,
        createOrderDB
    }
)
    {
        const createOrder= buildCreateOrder(
            {
                makeOrder: makeOrder,
                createOrderDB: createOrderDB
            }
        );
        
        const services = Object.freeze(
            {
                createOrder
            }
        );

        return services;
    }