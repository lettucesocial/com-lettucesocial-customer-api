module.exports = function buildNotifyStipreWebhookRequestOnTelegramGroup
(
    {
        LETTUCESOCIAL_GROUP_TELEMGRA_ID,
        sendMessageTLGRM
    }
)
    {
        if
        (
            !LETTUCESOCIAL_GROUP_TELEMGRA_ID
        )
            {
                throw new Error('buildNotifyStipreWebhookRequestOnTelegramGroup must have LETTUCESOCIAL_GROUP_TELEMGRA_ID.');
            }

        if
        (
            !sendMessageTLGRM
        )
            {
                throw new Error('buildNotifyStipreWebhookRequestOnTelegramGroup must have sendMessageTLGRM.');
            }
            
        return async function notifyStipreWebhookRequestOnTelegramGroup
        (
            {
                stipeWebhookRequest
            }
        )
            {
                if
                (
                    !stipeWebhookRequest
                )
                    {
                        throw new Error('notifyStipreWebhookRequestOnTelegramGroup must have stipeWebhookRequest.');
                    }

                const stringifyStipeWebhookRequest = JSON.stringify(
                    stipeWebhookRequest
                );

                const sendMessageTLGRMResult = await sendMessageTLGRM(
                    {
                        chat_id: LETTUCESOCIAL_GROUP_TELEMGRA_ID,
                        text: stringifyStipeWebhookRequest,
                        parse_mode: undefined,
                        reply_markup:[]
                    }
                );

                return sendMessageTLGRMResult;

            }
    }