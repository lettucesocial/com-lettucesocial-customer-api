module.exports = function buildGetAllPackage
(
    {
        getAllPackageDB
    }
)
    {
        return async function getAllPackage
        ()
            {
                const getAllPackageDBResult = await getAllPackageDB();

                return getAllPackageDBResult;
            }
    }