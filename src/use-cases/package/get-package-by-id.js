module.exports = function buildGetPackageById
(
    {
        getPackageByIdDB
    }
)
    {
        if
        (
            !getPackageByIdDB
        )
            {
                throw new Error('buildGetPackageById must have getPackageByIdDB.');
            }
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

                const getPackageByIdDBResult = await getPackageByIdDB(
                    {
                        packageId: packageId
                    }
                );

                return getPackageByIdDBResult
            } 
    }