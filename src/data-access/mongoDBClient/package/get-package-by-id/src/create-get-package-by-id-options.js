module.exports = function buildCreateGetPackageByIdOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateGetPackageByIdOptions must have ObjectId.');
            }
        
        return function createGetPackageByIdOptions
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
                        throw new Error('createGetPackageByIdOptions must have packageId.');
                    }
                    
                const packageObjectId = new ObjectId(
                    packageId
                );

                const filter = {
                    "_id": packageObjectId
                };

                return filter;
            }
    }