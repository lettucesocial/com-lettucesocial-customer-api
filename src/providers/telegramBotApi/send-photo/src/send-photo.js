module.exports = function buildSendPhoto
(
    {
        BOT_TOKEN,
        fetch,
        createSendPhotoRequest,
        translateSendPhotoResponse
    }
)
    {
        if
        (
            !BOT_TOKEN
        )
            {
                throw new Error('buildSendPhoto must have BOT_TOKEN.');
            }

        if
        (
            !fetch
        )
            {
                throw new Error('buildSendPhoto must have fetch.');
            }

        if
        (
            !createSendPhotoRequest
        )
            {
                throw new Error('buildSendPhoto must have createSendPhotoRequest.');
            }

        if
        (
            !translateSendPhotoResponse
        )
            {
                throw new Error('buildSendPhoto must have translateSendPhotoResponse.');
            }

        const SEND_PHOTO_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;

        return async function sendPhoto
        (
            {
                chat_id,
                photo,
                caption,
                reply_markup
            }
        )
            {
                if
                (
                    !chat_id
                )
                    {
                        throw new Error('sendPhoto must have chat_id.');
                    }
                if
                (
                    !photo
                )
                    {
                        throw new Error('sendPhoto must have photo.');
                    }
                if
                (
                    !caption
                )
                    {
                        throw new Error('sendPhoto must have caption.');
                    }
                if
                (
                    !reply_markup
                )
                    {
                        throw new Error('sendPhoto must have reply_markup.');
                    }

                const options = createSendPhotoRequest(
                    {
                        chat_id,
                        photo,
                        caption,
                        reply_markup
                    }
                );

                const request = await fetch(
                    SEND_PHOTO_URL,
                    options
                );
        
                const response = await request.json();

                const sendMessageResponse = translateSendPhotoResponse(response);

                return sendMessageResponse;
            }        
    }