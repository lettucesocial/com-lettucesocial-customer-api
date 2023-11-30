module.exports = function buildGetOrderById
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
                throw new Error('buildGetOrderById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetOrderById must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetOrderById must have translateResponse.');
            }

        const COLLECTION_NAME = 'orders';
        return async function getOrderById
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
                        throw new Error('createGetCreatorByIdOptions must have orderId.');
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