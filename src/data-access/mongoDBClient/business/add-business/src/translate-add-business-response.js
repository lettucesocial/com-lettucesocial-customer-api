module.exports= function buildTranslateAddBusinessResponse
()
    {
        return function translateAddBusinessResponse
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
                        throw new Error('translateAddBusinessResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddBusinessResponse must have insertedId');
                    }

                
                return response.insertedId;
                
            }
    }