module.exports = function buildUpdateOrderBusinessOnTlgrmGroup
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
                throw new Error('buildUpdateOrderBusinessOnTlgrmGroup must have editMessageTLGRM.');
            }

        if
        (
            !LETTUCESOCIAL_GROUP_TELEMGRA_ID
        )
            {
                throw new Error('buildUpdateOrderBusinessOnTlgrmGroup must have LETTUCESOCIAL_GROUP_TELEMGRA_ID.');
            }

        return async function updateOrderBusinessOnTlgrmGroup
        (
            {
                telegramGroupMessageId,
                orderId,
                business,
                package,
                creator
            }
        )
            {

                if
                (
                    !telegramGroupMessageId
                )
                    {
                        throw new Error('updateOrderBusinessOnTlgrmGroup must have telegramGroupMessageId.');
                    }

                if
                (
                    !orderId
                )
                    {
                        throw new Error('updateOrderBusinessOnTlgrmGroup must have orderId.');
                    }

                if
                (
                    !business
                )
                    {
                        throw new Error('updateOrderBusinessOnTlgrmGroup must have business.');
                    }

                if
                (
                    !package
                )
                    {
                        throw new Error('updateOrderBusinessOnTlgrmGroup must have package.');
                    }

                if
                (
                    !creator
                )
                    {
                        throw new Error('updateOrderBusinessOnTlgrmGroup must have creator.');
                    }

                const message = `🔗 Assing Busines: ${orderId}\nBusiness: ${business.businessName}\nPackage: ${package.title}\nCreator: ${creator.instagramHandle}`;

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
    }