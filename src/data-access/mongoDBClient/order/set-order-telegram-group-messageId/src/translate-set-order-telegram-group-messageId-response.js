module.exports = function buildTranslateSetOrderTelegramGroupMessageIdResponse
()
    {
        return function translateSetOrderTelegramGroupMessageIdResponse
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
                        throw new Error('translateSetOrderTelegramGroupMessageIdResponse must have response');
                    }

                
                return response;
                
            }
    }