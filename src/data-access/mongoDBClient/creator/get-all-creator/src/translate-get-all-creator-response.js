module.exports = function buildTranslateGetAllCreatorResponse
()
    {
        return function translateGetAllCreatorResponse
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
                        throw new Error('translateGetAllCreatorResponse must have response');
                    }

                return response.toArray();   
            }
    }