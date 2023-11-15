module.exports = function buildCreateGetAllPackageOptions
()
    {
        return function createGetAllPackageOptions
        ()
            {
                const filter = {};

                const options = {
                    filter: filter
                }

                return options;
            }
    }