module.exports = function buildGetBusinessById
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
                throw new Error('buildGetBusinessById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetBusinessById must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetBusinessById must have translateResponse.');
            }

        const COLLECTION_NAME = 'businesses';

        return async function getBusinessById
        (
            {
                businessId
            }
        )
            {
                if
                (
                    !businessId
                )
                    {
                        throw new Error('getBusinessById must have businessId.');
                    }


                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );
                
                const options = createOptions(
                    {
                        businessId: businessId
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