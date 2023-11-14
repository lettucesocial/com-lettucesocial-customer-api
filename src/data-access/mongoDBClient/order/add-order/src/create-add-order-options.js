module.exports = function buildCreateAddOrderOptions
()
    {
        return function createAddOrderOptions
        (
            {
                order
            }
        )
            {
                if
                (
                    !order
                )
                    {
                        throw new Error('createAddOrderOptions must have order');
                    }
                
                const document = order.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }