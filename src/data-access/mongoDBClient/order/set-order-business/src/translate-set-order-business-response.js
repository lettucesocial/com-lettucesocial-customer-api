module.exports = function buildTranslateSetOrderBusinessResponse
()
    {
        return function translateSetOrderBusinessResponse
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
                        throw new Error('translateSetOrderBusinessResponse must have response');
                    }

                
                return response;
                
            }
    }