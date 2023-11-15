module.exports = function buildGetPackageById
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
                throw new Error('buildGetPackageById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetPackageById must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetPackageById must have translateResponse.');
            }

        const COLLECTION_NAME = 'packages';

        return async function getPackageById
        (
            {
                packageId
            }
        )
            {
                if
                (
                    !packageId
                )
                    {
                        throw new Error('getPackageById must have packageId.');
                    }


                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );
                
                const options = createOptions(
                    {
                        packageId: packageId
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