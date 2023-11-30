module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { getOrderFullDetailsByOrderId } = require('./get-orderFullDetails-by-id')
        (
            {
                getDb:getDb,
                ObjectId: ObjectId
            } 
        );


        const services = Object.freeze(
            {
                getOrderFullDetailsByOrderId
            }
        );

        return services;

    }