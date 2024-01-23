module.exports = function buildNotifyBusinessRequestNotificationOnTlgrmGroup
(
    {
        sendMessageTLGRM,
        LETTUCESOCIAL_GROUP_TELEMGRA_ID,
        escapedMessageForMarkdownV2Style
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

        if
        (
            !escapedMessageForMarkdownV2Style
        )
            {
                throw new Error('buildNotifyBusinessRequestNotificationOnTlgrmGroup must have escapedMessageForMarkdownV2Style.');
            }

        return async function notifyBusinessRequestNotificationOnTlgrmGroup
        (
            {
                zipcode,
                business,
                emailResultMessage
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

                if
                (
                    !emailResultMessage
                )
                    {
                        throw new Error('notifyBusinessRequestNotificationOnTlgrmGroup must have emailResultMessage.');
                    }

                try
                    {
                        const escapedBusinessName = escapedMessageForMarkdownV2Style(
                            {
                                text: business.businessName
                            }
                        );

                        const escapedBusinessOwnerTitle = escapedMessageForMarkdownV2Style(
                            {
                                text: business.ownerTitle
                            }
                        );

                        const escapedBusinessEmail = escapedMessageForMarkdownV2Style(
                            {
                                text: business.email
                            }
                        );

                        const escapedBusinessMobile = escapedMessageForMarkdownV2Style(
                            {
                                text: business.mobile
                            }
                        );


                        
                        const escapedEmailResultMessage = escapedMessageForMarkdownV2Style(
                            {
                                text: emailResultMessage
                            }
                        );

                        const message = `🔔 ${escapedBusinessName} Request notification for zipcode ${zipcode}\n🧍‍♂️ ownerTitle: ${escapedBusinessOwnerTitle}\n📧 email: ${escapedBusinessEmail}\n📱 mobile: ${escapedBusinessMobile}\n📧 send email Result:${escapedEmailResultMessage}`;

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