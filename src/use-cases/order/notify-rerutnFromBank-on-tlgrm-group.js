module.exports = function buildNotifyRerutnFromBankOnTlgrmGroup
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
                throw new Error('buildNotifyRerutnFromBankOnTlgrmGroup must have sendMessageTLGRM.');
            }

        if
        (
            !LETTUCESOCIAL_GROUP_TELEMGRA_ID
        )
            {
                throw new Error('buildNotifyRerutnFromBankOnTlgrmGroup must have LETTUCESOCIAL_GROUP_TELEMGRA_ID.');
            }

        return async function notifyRerutnFromBankOnTlgrmGroup
        ()
            {
                try
                    {
                        const message = 'some one return from bank';

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