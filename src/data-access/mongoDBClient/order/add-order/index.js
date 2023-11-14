const buildTranslateAddOrderResponse = require('./src/translate-add-order-response');
const buildCreateAddOrderOptions = require('./src/create-add-order-options');
const buildAddOrder = require('./src/add-order');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddOrderResponse = buildTranslateAddOrderResponse();

        const createAddOrderOptions = buildCreateAddOrderOptions();

        const addOrder = buildAddOrder(
            {
                getDb: getDb,
                createOptions: createAddOrderOptions,
                translateResponse: translateAddOrderResponse
            }
        );

        const servies = Object.freeze(
            {
                addOrder
            }
        );

        return servies;
    }