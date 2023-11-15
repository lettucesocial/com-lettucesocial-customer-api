const buildTranslateGetCreatorByIdResponse = require('./src/translate-get-creator-by-id-response');
const buildCreateGetCreatorByIdOptions = require('./src/create-get-creator-by-id-options');
const buildGetCreatorById = require('./src/get-creator-by-id');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const translateGetCreatorByIdResponse = buildTranslateGetCreatorByIdResponse();

        const createGetCreatorByIdOptions = buildCreateGetCreatorByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getCreatorById = buildGetCreatorById(
            {
                getDb: getDb,
                createOptions: createGetCreatorByIdOptions,
                translateResponse: translateGetCreatorByIdResponse   
            }
        );

        const services = Object.freeze(
            {
                getCreatorById
            }
        );

        return services;
    }