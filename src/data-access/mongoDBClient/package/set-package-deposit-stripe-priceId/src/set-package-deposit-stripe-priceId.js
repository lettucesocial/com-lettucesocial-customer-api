module.exports = function buildSetPackageDepositStripePriceId
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
                throw new Error('buildSetPackageDepositStripePriceId must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetPackageDepositStripePriceId must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetPackageDepositStripePriceId must have translateResponse.');
            }

        const COLLECTION_NAME = 'packages';
        
        return async function setPackageDepositStripePriceId
        (
            {
                packageId,
                depositStripePriceId
            }
        )
            {
                if
                (
                    !packageId
                )
                    {
                        throw new Error('setPackageDepositStripePriceId must have packageId.');
                    }

                if
                (
                    !depositStripePriceId
                )
                    {
                        throw new Error('setPackageDepositStripePriceId must have depositStripePriceId.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        packageId: packageId,
                        depositStripePriceId: depositStripePriceId
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