module.exports = function buildEditMessage
(
    BOT_TOKEN,
    fetch,
    createEditMessageRequest,
    translateEditMessageResponse
)
    {

        const EDIT_MESSAGE_URL = `https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`;

        return async function editMessage
        (
            chat_id,
            message_id,
            text,
            reply_markup
        )
            {
                const options = createEditMessageRequest(
                    chat_id,
                    message_id,
                    text,
                    reply_markup
                );

                const request = await fetch(
                    EDIT_MESSAGE_URL,
                    options
                );
        
                const response = await request.json();

                const sendMessageResponse = translateEditMessageResponse(response);

                return sendMessageResponse;
            }
    }