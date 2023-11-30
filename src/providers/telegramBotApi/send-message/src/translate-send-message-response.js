module.exports = function buildTranslateSendMessageResponse
()
    {
        return async function translateSendMessageResponse
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
                        throw new Error('translateSendMessageResponse must have response.');
                    }
                    
                const jsonResponse = await response.json();

                if
                (
                    jsonResponse.ok == true &&
                    jsonResponse.result
                )
                    {
                        return jsonResponse.result.message_id;    
                    }
                else if
                (
                    jsonResponse.ok == false &&
                    jsonResponse.description  
                )
                    {
                        throw new Error(jsonResponse.description)
                    }
                else
                    {
                        throw new Error(`Error in translateEditMessageResponse ${JSON.stringify(jsonResponse)}`)
                    }
            }
    }