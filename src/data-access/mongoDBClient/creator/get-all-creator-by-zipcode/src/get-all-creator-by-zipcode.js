module.exports = function buildGetAllCreatorByZipcode
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
                throw new Error('buildGetAllCreatorByZipcode must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllCreatorByZipcode must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllCreatorByZipcode must have translateResponse.');
            }

        const COLLECTION_NAME = 'creators';
        
        return async function getAllCreatorByZipcode
        (
            {
                zipcode
            }
        )
            {
                if
                (
                    !zipcode
                )
                    {
                        throw new Error('getAllCreatorByZipcode must have zipcode.');
                    }
                    
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        zipcode: zipcode
                    }
                );

                const response = await collection
                    .find(
                        options.filter,
                    )
                    .sort(
                        options.sort
                    );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }