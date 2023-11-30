module.exports = function buildEditMessage
(
    {
        BOT_TOKEN,
        fetch,
        createRequest,
        translateResponse
    }
)
    {
        if
        (
            !BOT_TOKEN
        )
            {
                throw new Error('buildEditMessage must have BOT_TOKEN.');
            }

        if
        (
            !fetch
        )
            {
                throw new Error('buildEditMessage must have fetch.');
            }
        
        if
        (
            !createRequest
        )
            {
                throw new Error('buildEditMessage must have createRequest.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildEditMessage must have translateResponse.');
            }

        const EDIT_MESSAGE_URL = `https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`;

        return async function editMessage
        (
            {
                chat_id,
                message_id,
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
                        throw new Error('editMessage must have chat_id.');
                    }
                
                if
                (
                    !message_id
                )
                    {
                        throw new Error('editMessage must have message_id.');
                    }

                if
                (
                    !text
                )
                    {
                        throw new Error('editMessage must have text.');
                    }

                const options = createRequest(
                    {
                        chat_id: chat_id,
                        message_id: message_id,
                        text: text,
                        reply_markup: reply_markup,
                        parse_mode: parse_mode
                    }
                );

                const response = await fetch(
                    EDIT_MESSAGE_URL,
                    options
                );
        
                const sendMessageResponse = await translateResponse(
                    {
                        response: response
                    }
                );

                return sendMessageResponse;
            }
    }