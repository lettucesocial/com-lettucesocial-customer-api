const buildTranslateGetPackageByIdResponse = require('./src/translate-get-package-by-id-response');
const buildCreateGetPackageByIdOptions = require('./src/create-get-package-by-id-options');
const buildGetPackageById = require('./src/get-package-by-id');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const translateGetPackageByIdResponse = buildTranslateGetPackageByIdResponse();

        const createGetPackageByIdOptions = buildCreateGetPackageByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getPackageById = buildGetPackageById(
            {
                getDb: getDb,
                createOptions: createGetPackageByIdOptions,
                translateResponse: translateGetPackageByIdResponse   
            }
        );

        const services = Object.freeze(
            {
                getPackageById
            }
        );

        return services;
    }