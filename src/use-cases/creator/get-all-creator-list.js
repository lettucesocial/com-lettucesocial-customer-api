module.exports = function buildGetAllCreatorList
(
    {
        getAllCreatorDB
    }
)
    {
        if
        (
            !getAllCreatorDB
        )
            {
                throw new Error("buildGetAllCreatorList must have getAllCreatorDB")
            }

        return async function getAllCreatorList
        ()
            {
                const getAllCreatorDBResult = await getAllCreatorDB();

                return getAllCreatorDBResult;
                
            }
    }