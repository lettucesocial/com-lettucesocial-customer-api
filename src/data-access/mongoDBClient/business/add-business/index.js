const buildTranslateAddBusinessResponse = require('./src/translate-add-business-response');
const buildCreateAddBusinessOptions = require('./src/create-add-business-options');
const buildAddBusiness = require('./src/add-business');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddBusinessResponse = buildTranslateAddBusinessResponse();

        const createAddBusinessOptions = buildCreateAddBusinessOptions();

        const addBusiness = buildAddBusiness(
            {
                getDb: getDb,
                createOptions: createAddBusinessOptions,
                translateResponse: translateAddBusinessResponse
            }
        );

        const servies = Object.freeze(
            {
                addBusiness
            }
        );

        return servies;
    }