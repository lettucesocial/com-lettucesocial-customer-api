const buildTranslateGetOrderByIdResponse = require('./src/translate-get-order-by-id-response');
const buildCreateGetOrderByIdOptions = require('./src/create-get-order-by-id-options');
const buildGetOrderById = require('./src/get-order-by-id');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const translateGetOrderByIdResponse = buildTranslateGetOrderByIdResponse();

        const createGetOrderByIdOptions = buildCreateGetOrderByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getOrderById = buildGetOrderById(
            {
                getDb: getDb,
                createOptions: createGetOrderByIdOptions,
                translateResponse: translateGetOrderByIdResponse
            }
        );

        const services = Object.freeze(
            {
                getOrderById
            }
        );

        return services;
    }