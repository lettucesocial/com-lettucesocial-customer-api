module.exports = function buildTranslateGetOrderFullDetailsByOrderIdResponse
()
    {
        return function translateGetOrderFullDetailsByOrderIdResponse
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
                        throw new Error('translateGetOrderFullDetailsByOrderIdResponse must have response.');
                    }
                return response;
            }
    }