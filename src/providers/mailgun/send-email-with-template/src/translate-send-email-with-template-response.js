module.exports = function buildTranslateSendEmailWithTemplateResponse
()
    {
        return async function translateSendEmailWithTemplateResponse
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

                const result = await response.json();

                return result;
            }
    }