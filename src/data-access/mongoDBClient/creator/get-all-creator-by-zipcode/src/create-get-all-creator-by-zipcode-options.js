module.exports = function buildCreateGetAllCreatorByZipcodeOptions
()
    {
        return function createGetAllCreatorByZipcodeOptions
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
                        throw new Error('createGetAllCreatorByZipcodeOptions must have zipcode');
                    }
                
                const filter = {
                    "zipCode": zipcode
                };

                const sort = {
                    "firstName":-1
                }

                const options = {
                    filter: filter,
                    sort:sort
                }

                return options;
            }
    }