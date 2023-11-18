module.exports = function buildCreateEditMessageRequest
(
    proxyAgent,
    generateInlineKeyboardMarkup
)
    {
        return function createEditMessageRequest
        (
            chat_id,
            message_id,
            text,
            reply_markup
        )
            {
                const headers = {
                    "content-type":"application/json"
                };
        
                const body = JSON.stringify(
                    {
                        chat_id: chat_id,
                        message_id: message_id,
                        text: text,
                        parse_mode: "MarkdownV2",
                        reply_markup: generateInlineKeyboardMarkup(reply_markup)
                    }
                )

        
                var options= {
                    method:"POST",
                    headers: headers,
                    body: body
                };
        
        
                if(proxyAgent){
                    options.agent = proxyAgent;
                }
        
                return options;
            }
    }