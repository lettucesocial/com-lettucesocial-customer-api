const buildGetAllPackage= require('./get-all-package');
const buildGetPackageById = require('./get-package-by-id');

module.exports= function
(
    {
        getAllPackageDB,
        getPackageByIdDB
    }
)
    {

        const getAllPackage = buildGetAllPackage(
            {
                getAllPackageDB: getAllPackageDB
            }
        );

        const getPackageById = buildGetPackageById(
            {
                getPackageByIdDB: getPackageByIdDB
            }
        );

        const services = Object.freeze(
            {
                getAllPackage,
                getPackageById 
            }
        );

        return services;
    }