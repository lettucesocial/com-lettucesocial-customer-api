module.exports = function buildGetAllPackage
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
                throw new Error('buildGetAllPackage must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllPackage must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllPackage must have translateResponse.');
            }

        const COLLECTION_NAME = 'packages';

        return async function getAllPackage
        ()
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions();

                const response = await collection.find(
                    options.filter
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }