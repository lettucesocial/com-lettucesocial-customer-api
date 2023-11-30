module.exports = function buildNotifyBusinessRequestNotificationOnTlgrmGroup
(
    {
        sendMessageTLGRM,
        LETTUCESOCIAL_GROUP_TELEMGRA_ID
    }
)
    {
        if
        (
            !sendMessageTLGRM
        )
            {
                throw new Error('buildNotifyBusinessRequestNotificationOnTlgrmGroup must have sendMessageTLGRM.');
            }

        if
        (
            !LETTUCESOCIAL_GROUP_TELEMGRA_ID
        )
            {
                throw new Error('buildNotifyBusinessRequestNotificationOnTlgrmGroup must have LETTUCESOCIAL_GROUP_TELEMGRA_ID.');
            }

        return async function notifyBusinessRequestNotificationOnTlgrmGroup
        (
            {
                zipcode,
                business
            }
        )
            {
                if
                (
                    !zipcode
                )
                    {
                        throw new Error('notifyBusinessRequestNotificationOnTlgrmGroup must have zipcode.');
                    }

                if
                (
                    !business
                )
                    {
                        throw new Error('notifyBusinessRequestNotificationOnTlgrmGroup must have business.');
                    }

                try
                    {
                        const message = `🔔 ${business.businessName} Request notification for zipcode ${zipcode}\n🧍‍♂️ ownerTitle: ${business.ownerTitle}\n📧 email: ${business.email}\n📱 mobile: ${business.mobile}\n`;

                        const sendMessageTLGRMResult = await sendMessageTLGRM(
                            {
                                chat_id: LETTUCESOCIAL_GROUP_TELEMGRA_ID,
                                text: message,
                                parse_mode: 'MarkdownV2',
                                reply_markup:[]
                            }
                        );

                        console.log(sendMessageTLGRMResult);

                        return sendMessageTLGRMResult;
                    }
                catch
                    (
                        error
                    )
                        {
                            console.log(error);
                        }
            }
    }