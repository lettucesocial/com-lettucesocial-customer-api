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

        const services = Object.freeze(
            {
                addBusiness
            }
        );

        return services;

    }