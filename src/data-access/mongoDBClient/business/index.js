module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addBusiness } = require('./add-business')
        (
            {
                getDb: getDb
            } 
        );

        const { getBusinessById } = require('./get-business-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const services = Object.freeze(
            {
                addBusiness,
                getBusinessById
            }
        );

        return services;

    }