module.exports = function buildGetOrderFullDetailsByOrderId
(
    {
        getDb,
        createOptions,
        translateResponse
    }
)
    {
        if
        (
            !getDb
        )
            {
                throw new Error('buildGetOrderFullDetailsByOrderId must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetOrderFullDetailsByOrderId must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetOrderFullDetailsByOrderId must have translateResponse.');
            }

        const COLLECTION_NAME = 'orderFullDetails';

        return async function getOrderFullDetailsByOrderId
        (
            {
                orderId
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error('getOrderFullDetailsByOrderId must have orderId.');
                    }
                    
                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );
                
                const options = createOptions(
                    {
                        orderId: orderId
                    }
                );
                
                const response = await collection.findOne(
                    options
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }