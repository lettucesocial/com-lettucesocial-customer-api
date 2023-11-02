module.exports = function buildTranslateGetAllCreatorByZipcodeResponse
()
    {
        return function translateGetAllCreatorByZipcodeResponse
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
                        throw new Error('translateGetAllCreatorByZipcodeResponse must have response');
                    }

                return response.toArray();   
            }
    }