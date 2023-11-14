module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addOrder } = require('./add-order')
        (
            {
                getDb: getDb
            } 
        );

        const services = Object.freeze(
            {
                addOrder
            }
        );

        return services;

    }