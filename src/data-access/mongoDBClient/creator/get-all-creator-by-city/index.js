const buildTranslateGetAllCreatorByZipcodeResponse = require('./src/translate-search-all-creator-by-zipcode-response');
const buildCreateGetAllCreatorByZipcodeOptions = require('./src/create-get-all-creator-by-zipcode-options');
const buildGetAllCreatorByZipcode = require('./src/get-all-creator-by-zipcode');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateGetAllCreatorByZipcodeResponse = buildTranslateGetAllCreatorByZipcodeResponse();

        const createGetAllCreatorByZipcodeOptions = buildCreateGetAllCreatorByZipcodeOptions();

        const getAllCreatorByZipcode = buildGetAllCreatorByZipcode(
            {
                getDb: getDb,
                createOptions: createGetAllCreatorByZipcodeOptions,
                translateResponse: translateGetAllCreatorByZipcodeResponse   
            }
        );

        const services = Object.freeze(
            {
                getAllCreatorByZipcode
            }
        );

        return services;
    }