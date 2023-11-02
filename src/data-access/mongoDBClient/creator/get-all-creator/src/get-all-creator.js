module.exports = function buildGetAllCreator
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
                throw new Error('buildGetAllCreator must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllCreator must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllCreator must have translateResponse.');
            }

        const COLLECTION_NAME = 'creators';
        
        return async function getAllCreator
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