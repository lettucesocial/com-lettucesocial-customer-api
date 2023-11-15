const buildTranslateGetAllPackageResponse = require('./src/translate-get-all-package-response');
const buildCreateGetAllPackageOptions = require('./src/create-get-all-package-options');
const buildGetAllPackage = require('./src/get-all-package');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateGetAllPackageResponse = buildTranslateGetAllPackageResponse();

        const createGetAllPackageOptions = buildCreateGetAllPackageOptions();

        const getAllPackage = buildGetAllPackage(
            {
                getDb: getDb,
                createOptions: createGetAllPackageOptions,
                translateResponse: translateGetAllPackageResponse   
            }
        );

        const services = Object.freeze(
            {
                getAllPackage
            }
        );

        return services;
    }