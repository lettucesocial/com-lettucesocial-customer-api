module.exports = function buildAddOrder
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
                throw new Error('buildAddOrder must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddOrder must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddOrder must have translateResponse.');
            }

        const COLLECTION_NAME = 'orders';
        return async function addOrder
        (
            {
                order
            }
        )
            {
                if
                (
                    !order
                )
                    {
                        throw new Error('addOrder must have order.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        order: order
                    }
                );

                const response = await collection.insertOne(
                    options.document
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }