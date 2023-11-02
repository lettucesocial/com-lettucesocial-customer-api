const buildTranslateGetAllCreatorResponse = require('./src/translate-get-all-creator-response');
const buildCreateGetAllCreatorOptions = require('./src/create-get-all-creator-options');
const buildGetAllCreator = require('./src/get-all-creator');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateGetAllCreatorResponse = buildTranslateGetAllCreatorResponse();

        const createGetAllCreatorOptions = buildCreateGetAllCreatorOptions();

        const getAllCreator = buildGetAllCreator(
            {
                getDb: getDb,
                createOptions: createGetAllCreatorOptions,
                translateResponse: translateGetAllCreatorResponse   
            }
        );

        const services = Object.freeze(
            {
                getAllCreator
            }
        );

        return services;
    }