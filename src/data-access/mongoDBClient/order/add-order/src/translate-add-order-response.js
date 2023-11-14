module.exports = function buildTranslateAddOrderResponse
()
    {
        return function translateAddOrderResponse
        (
            {
                response
            }
        )
            {
                if
                (
                    !response
                )
                    {
                        throw new Error('translateAddOrderResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddOrderResponse must have insertedId');
                    }

                
                return response.insertedId;
                
            }
    }