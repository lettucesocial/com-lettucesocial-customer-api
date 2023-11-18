module.exports = function buildNotifyCreatePaymentOrderOnTlgrmGroup
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
                throw new Error('buildNotifyCreatePaymentOrderOnTlgrmGroup must have sendMessageTLGRM.');
            }

        if
        (
            !LETTUCESOCIAL_GROUP_TELEMGRA_ID
        )
            {
                throw new Error('buildNotifyCreatePaymentOrderOnTlgrmGroup must have LETTUCESOCIAL_GROUP_TELEMGRA_ID.');
            }

        return async function notifyCreatePaymentOrderOnTlgrmGroup
        (
            {
                orderId
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error('notifyCreatePaymentOrderOnTlgrmGroup must have orderId.');
                    }
                try
                    {
                        const message = `🛍 New Order: ${orderId}`;

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