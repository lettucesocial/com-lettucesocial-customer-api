module.exports = function buildSetOrderBusiness
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
                throw new Error('buildSetOrderBusiness must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetOrderBusiness must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetOrderBusiness must have translateResponse.');
            }

        const COLLECTION_NAME = 'orders';

        return async function setOrderBusiness
         (
            {
                orderId,
                businessId
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error('setOrderBusiness must have orderId.');
                    }

                if
                (
                    !businessId
                )
                    {
                        throw new Error('setOrderBusiness must have businessId.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        orderId:orderId,
                        businessId: businessId
                    }
                );

                const response = await collection.updateOne(
                    options.filter,
                    options.update
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;  

            }
    }