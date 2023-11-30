const buildTranslateGetBusinessByIdResponse = require('./src/translate-get-business-by-id-response');
const buildCreateGetBusinessByIdOptions = require('./src/create-get-business-by-id-options');
const buildGetBusinessById = require('./src/get-business-by-id');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const translateGetBusinessByIdResponse = buildTranslateGetBusinessByIdResponse();

        const createGetBusinessByIdOptions = buildCreateGetBusinessByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getBusinessById = buildGetBusinessById(
            {
                getDb: getDb,
                createOptions: createGetBusinessByIdOptions,
                translateResponse: translateGetBusinessByIdResponse   
            }
        );

        const services = Object.freeze(
            {
                getBusinessById
            }
        );

        return services;
    }