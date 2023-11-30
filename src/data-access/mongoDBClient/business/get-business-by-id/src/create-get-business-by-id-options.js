module.exports = function buildCreateGetBusinessByIdOptions
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
                throw new Error('buildCreateGetBusinessByIdOptions must have ObjectId.');
            }
        return function createGetBusinessByIdOptions
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
                        throw new Error('createGetBusinessByIdOptions must have businessId.');
                    }
                    
                const businessObjectId = new ObjectId(
                    businessId
                );

                const filter = {
                    "_id": businessObjectId
                };

                return filter;
            }
    }