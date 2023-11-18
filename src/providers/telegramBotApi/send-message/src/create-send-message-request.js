module.exports = function buildCreateSendMessageRequest
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
                throw new Error('buildCreateSendMessageRequest must have generateInlineKeyboardMarkup.');
            }

        return function createSendMessageRequest
        (
            {
                chat_id,
                text,
                parse_mode,
                reply_markup
            }
        )
            {
                if
                (
                    !chat_id
                )
                    {
                        throw new Error('createSendMessageRequest must have chat_id.');
                    }

                if
                (
                    !text
                )
                    {
                        throw new Error('createSendMessageRequest must have text.');
                    }

                if
                (
                    !parse_mode
                )
                    {
                        throw new Error('createSendMessageRequest must have parse_mode.');
                    }

                const headers = {
                    "content-type":"application/json"
                };
        
                const body = JSON.stringify(
                    {
                        chat_id: chat_id,
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