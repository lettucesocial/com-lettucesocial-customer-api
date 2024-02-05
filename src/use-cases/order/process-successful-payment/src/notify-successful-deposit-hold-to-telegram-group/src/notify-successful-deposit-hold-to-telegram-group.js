module.exports = function buildNotifySuccessfulDepositHoldToTelegramGroup
(
    {
        LETTUCESOCIAL_GROUP_TELEMGRA_ID,
        getNotifySuccessfulDepositHoldToTelegramGroupMessage,
        editMessageTLGRM
    }
)
    {
        if
        (
            !LETTUCESOCIAL_GROUP_TELEMGRA_ID
        )
            {
                throw new Error('buildNotifySuccessfulDepositHoldToTelegramGroup must have LETTUCESOCIAL_GROUP_TELEMGRA_ID.');
            }

        if
        (
            !getNotifySuccessfulDepositHoldToTelegramGroupMessage
        )
            {
                throw new Error('buildNotifySuccessfulDepositHoldToTelegramGroup must have getNotifySuccessfulDepositHoldToTelegramGroupMessage.');
            }

        if
        (
            !editMessageTLGRM
        )
            {
                throw new Error('buildNotifySuccessfulDepositHoldToTelegramGroup must have editMessageTLGRM.');
            }

        return async function notifySuccessfulDepositHoldToTelegramGroup
        (
            {
                telegramGroupMessageId,
                orderId,
                ownerTitle,
                businessName,
                businessPhoneNumber,
                businessEmail,
                pakcageTitle,
                creatorFirstName,
                creatorLastName,
                creatorInstagramHandle,
                creatorEmail,
                creatorPhoneNumber
            }
        )
            {

                if
                (
                    !telegramGroupMessageId
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have telegramGroupMessageId.');
                    }

                if
                (
                    !orderId
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have orderId.');
                    }

                if
                (
                    !ownerTitle
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have ownerTitle.');
                    }

                if
                (
                    !businessName
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have businessName.');
                    }

                if
                (
                    !businessPhoneNumber
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have businessPhoneNumber.');
                    }

                if
                (
                    !businessEmail
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have businessEmail.');
                    }
                    
                if
                (
                    !pakcageTitle
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have pakcageTitle.');
                    }
                    
                if
                (
                    !creatorFirstName
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have creatorFirstName.');
                    }

                if
                (
                    !creatorLastName
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have creatorLastName.');
                    }

                if
                (
                    !creatorInstagramHandle
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have creatorInstagramHandle.');
                    }

                if
                (
                    !creatorEmail
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have creatorEmail.');
                    }

                if
                (
                    !creatorPhoneNumber
                )
                    {
                        throw new Error('notifySuccessfulDepositHoldToTelegramGroup must have creatorPhoneNumber.');
                    }

                const getNotifySuccessfulDepositHoldToTelegramGroupMessageResult = getNotifySuccessfulDepositHoldToTelegramGroupMessage(
                    {
                        orderId: orderId,
                        ownerTitle: ownerTitle,
                        businessName: businessName,
                        businessPhoneNumber: businessPhoneNumber,
                        businessEmail: businessEmail,
                        pakcageTitle: pakcageTitle,
                        creatorFirstName: creatorFirstName,
                        creatorLastName: creatorLastName,
                        creatorInstagramHandle: creatorInstagramHandle,
                        creatorEmail: creatorEmail,
                        creatorPhoneNumber:creatorPhoneNumber
                    }
                );

                const editMessageTLGRMResult = await editMessageTLGRM(
                    {
                        chat_id: LETTUCESOCIAL_GROUP_TELEMGRA_ID,
                        message_id: telegramGroupMessageId,
                        text: getNotifySuccessfulDepositHoldToTelegramGroupMessageResult,
                        parse_mode: undefined,
                        reply_markup:[]
                    }
                );

                return editMessageTLGRMResult;

            }
    }