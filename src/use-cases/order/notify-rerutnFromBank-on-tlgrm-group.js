module.exports = function buildNotifyRerutnFromBankOnTlgrmGroup
(
    {
        editMessageTLGRM,
        LETTUCESOCIAL_GROUP_TELEMGRA_ID
    }
)
    {
        if
        (
            !editMessageTLGRM
        )
            {
                throw new Error('buildNotifyRerutnFromBankOnTlgrmGroup must have editMessageTLGRM.');
            }

        if
        (
            !LETTUCESOCIAL_GROUP_TELEMGRA_ID
        )
            {
                throw new Error('buildNotifyRerutnFromBankOnTlgrmGroup must have LETTUCESOCIAL_GROUP_TELEMGRA_ID.');
            }

        return async function notifyRerutnFromBankOnTlgrmGroup
        (
            {
                telegramGroupMessageId,
                orderId,
                creator,
                package
            }

        )
            {
                if
                (
                    !telegramGroupMessageId
                )
                    {
                        throw new Error('notifyRerutnFromBankOnTlgrmGroup must have telegramGroupMessageId.');
                    }

                if
                (
                    !orderId
                )
                    {
                        throw new Error('notifyRerutnFromBankOnTlgrmGroup must have orderId.');
                    }

                if
                (
                    !creator
                )
                    {
                        throw new Error('notifyRerutnFromBankOnTlgrmGroup must have creator.');
                    }

                if
                (
                    !package
                )
                    {
                        throw new Error('notifyRerutnFromBankOnTlgrmGroup must have package.');
                    }

                try
                    {
                        const message = `‼ CHECK STRIPE PANEL FOR VALIDATION OF THIS PAYMENT \n\n\n💵 Return from bank: ${orderId}\nPackage: ${package.title}\nCreator: ${creator.instagramHandle}`;

                        const editMessageTLGRMResult = await editMessageTLGRM(
                            {
                                chat_id: LETTUCESOCIAL_GROUP_TELEMGRA_ID,
                                message_id: telegramGroupMessageId,
                                text: message,
                                reply_markup:[],
                                parse_mode: undefined,
                            }
                        );
        
                        return editMessageTLGRMResult;
                    }
                catch
                    (
                        error
                    )
                        {
                            console.log(error);
                            //throw error;
                        }
                
                
            }
    }