module.exports= function buildAddBusiness
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
                throw new Error('buildAddCreator must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddCreator must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddCreator must have translateResponse.');
            }

        const COLLECTION_NAME = 'businesses';

        return async function addBusiness
        (
            {
                business
            }
        )
            {
                if
                (
                    !business
                )
                    {
                        throw new Error('addBusiness must have business.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        business: business
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