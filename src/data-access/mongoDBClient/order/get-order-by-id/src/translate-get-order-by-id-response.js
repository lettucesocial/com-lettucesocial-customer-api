module.exports = function buildTranslateGetOrderByIdResponse
()
    {
        return function translateGetOrderByIdResponse
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
                        throw new Error('translateGetOrderByIdResponse must have response.');
                    }
                return response;
            }
    }