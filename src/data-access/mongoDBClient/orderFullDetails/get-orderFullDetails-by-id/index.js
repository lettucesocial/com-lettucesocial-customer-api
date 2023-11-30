const buildTranslateGetOrderFullDetailsByOrderIdResponse = require('./src/translate-get-orderFullDetails-by-orderId-response');
const buildCreateGetOrderFullDetailsByOrderIdOptions = require('./src/create-get-orderFullDetails-by-orderId-options');
const buildGetOrderFullDetailsByOrderId = require('./src/get-orderFullDetails-by-orderId');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const translateGetOrderFullDetailsByOrderIdResponse = buildTranslateGetOrderFullDetailsByOrderIdResponse();

        const createGetOrderFullDetailsByOrderIdOptions = buildCreateGetOrderFullDetailsByOrderIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getOrderFullDetailsByOrderId = buildGetOrderFullDetailsByOrderId(
            {
                getDb: getDb,
                createOptions: createGetOrderFullDetailsByOrderIdOptions,
                translateResponse: translateGetOrderFullDetailsByOrderIdResponse
            }
        );

        const services = Object.freeze(
            {
                getOrderFullDetailsByOrderId
            }
        );

        return services;
    }