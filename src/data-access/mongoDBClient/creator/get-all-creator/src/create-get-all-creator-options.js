module.exports = function buildCreateGetAllCreatorOptions
()
    {
        return function createGetAllCreatorOptions
        ()
            {
                const filter = {};

                const options = {
                    filter: filter
                }

                return options;
            }
    }