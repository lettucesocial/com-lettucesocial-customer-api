module.exports = function buildGetCreatorById
(
    {
        getCreatorByIdDB
    }
)
    {
        if
        (
            !getCreatorByIdDB
        )
            {
                throw new Error("buildGetCreatorById must have getCreatorByIdDB")
            }

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
                        throw new Error("getCreatorById must have creatorId")
                    }
                    
                const getCreatorByIdDBResult = await getCreatorByIdDB(
                    {
                        creatorId: creatorId
                    }
                );

                return getCreatorByIdDBResult;
            }
    }