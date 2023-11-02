module.exports = function buildSearchCreatorByZipcode
(
    {
        getAllCreatorByZipcodeDB
    }
)
    {
        if
        (
            !getAllCreatorByZipcodeDB
        )
            {
                throw new Error("buildSearchCreatorByZipcode must have getAllCreatorByZipcodeDB")
            }
        return async function searchCreatorByZipcode
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
                        throw new Error("searchCreatorByZipcode must have zipcode")
                    }
                
                const getAllCreatorByZipcodeDBResult = await getAllCreatorByZipcodeDB(
                    {
                        zipcode: zipcode
                    }
                );

                return getAllCreatorByZipcodeDBResult;
            }
    }