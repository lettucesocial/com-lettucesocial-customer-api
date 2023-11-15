module.exports = function buildGetCreatorById
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
                throw new Error('buildGetCreatorById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetCreatorById must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetCreatorById must have translateResponse.');
            }

        const COLLECTION_NAME = 'creators';

        return async function getCreatorById
        (
            {
                creatorId
            }
        )
            {
                if
                (
                    !creatorId
                )
                    {
                        throw new Error('getCreatorById must have creatorId.');
                    }


                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );
                
                const options = createOptions(
                    {
                        creatorId: creatorId
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