module.exports = function buildCreateEditMessageRequest
(
    {
        generateInlineKeyboardMarkup
    }
)
    {
        if
        (
            !generateInlineKeyboardMarkup
        )
            {
                throw new Error('buildCreateEditMessageRequest must have generateInlineKeyboardMarkup.');
            }

        return function createEditMessageRequest
        (
            {
                chat_id,
                message_id,
                text,
                reply_markup,
                parse_mode
            }
        )
            {
                if
                (
                    !chat_id
                )
                    {
                        throw new Error('createEditMessageRequest must have chat_id.');
                    }
                
                if
                (
                    !message_id
                )
                    {
                        throw new Error('createEditMessageRequest must have message_id.');
                    }

                if
                (
                    !text
                )
                    {
                        throw new Error('createEditMessageRequest must have text.');
                    }


                const headers = {
                    "content-type":"application/json"
                };
        
                const body = JSON.stringify(
                    {
                        chat_id: chat_id,
                        message_id: message_id,
                        text: text,
                        parse_mode: parse_mode,
                        reply_markup: generateInlineKeyboardMarkup(
                            {
                                inlineKeyboardButtonList: reply_markup
                            }
                        )
                    }
                )

        
                var options= {
                    method:"POST",
                    headers: headers,
                    body: body
                };
        
        
                return options;
            }
    }