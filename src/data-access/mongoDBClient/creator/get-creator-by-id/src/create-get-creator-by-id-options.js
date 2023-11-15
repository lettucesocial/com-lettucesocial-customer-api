module.exports = function buildCreateGetCreatorByIdOptions
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
                throw new Error('buildCreateGetCreatorByIdOptions must have ObjectId.');
            }
        
        return function createGetCreatorByIdOptions
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
                        throw new Error('createGetCreatorByIdOptions must have creatorId.');
                    }
                    
                const creatorObjectId = new ObjectId(
                    creatorId
                );

                const filter = {
                    "_id": creatorObjectId
                };

                return filter;
            }
    }