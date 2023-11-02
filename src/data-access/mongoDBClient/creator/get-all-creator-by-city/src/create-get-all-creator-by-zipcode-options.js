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

                const options = {
                    filter: filter
                }

                return options;
            }
    }