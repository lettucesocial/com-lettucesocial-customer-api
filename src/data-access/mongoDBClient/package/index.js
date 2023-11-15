module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { getPackageById } = require('./get-package-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const { getAllPackage } = require('./get-all-package')(
            {
                getDb:getDb
            }
        );

        


        const services = Object.freeze(
            {
                getPackageById,
                getAllPackage
            }
        );

        return services;

    }