module.exports = function buildTranslateGetBusinessByIdResponse
()
    {
        return function translateGetBusinessByIdResponse
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
                        throw new Error('translateGetBusinessByIdResponse must have response.');
                    }
                return response;
            }
    }