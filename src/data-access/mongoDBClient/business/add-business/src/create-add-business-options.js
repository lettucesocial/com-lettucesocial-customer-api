module.exports= function buildCreateAddBusinessOptions
()
    {
        return function createAddBusinessOptions
        (
            {
                business
            }
        )
            {
                if
                (
                    !business
                )
                    {
                        throw new Error('createAddBusinessOptions must have business');
                    }
                
                const document = business.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }