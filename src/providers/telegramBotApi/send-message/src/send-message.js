module.exports = function buildSendMessage
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
                throw new Error('buildSendMessage must have BOT_TOKEN.');
            }

        if
        (
            !fetch
        )
            {
                throw new Error('buildSendMessage must have fetch.');
            }
        
        if
        (
            !createRequest
        )
            {
                throw new Error('buildSendMessage must have createRequest.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSendMessage must have translateResponse.');
            }

        const SEND_MESSAGE_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        return async function sendMessage
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
                        throw new Error('sendMessage must have chat_id.');
                    }
                
                if
                (
                    !text
                )
                    {
                        throw new Error('sendMessage must have text.');
                    }


                const options = createRequest(
                    {
                        chat_id: chat_id,
                        text: text,
                        parse_mode: parse_mode,
                        reply_markup: reply_markup
                    }
                );

                const response = await fetch(
                    SEND_MESSAGE_URL,
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