const buildTranslateSetOrderBusinessResponse = require('./src/translate-set-order-business-response');
const buildCreateSetOrderBusinessOptions = require('./src/create-set-order-business-options');
const buildSetOrderBusiness = require('./src/set-order-business');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const translateSetOrderBusinessResponse = buildTranslateSetOrderBusinessResponse();

        const createSetOrderBusinessOptions = buildCreateSetOrderBusinessOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setOrderBusiness = buildSetOrderBusiness(
            {
                getDb: getDb,
                createOptions: createSetOrderBusinessOptions,
                translateResponse: translateSetOrderBusinessResponse
            }
        );

        const services = Object.freeze(
            {
                setOrderBusiness
            }
        );

        return services;
    }