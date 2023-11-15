module.exports = function buildTranslateGetCreatorByIdResponse
()
    {
        return function translateGetCreatorByIdResponse
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
                        throw new Error('translateGetCreatorByIdResponse must have response.');
                    }
                return response;
            }
    }