module.exports = function buildProcessSuccessfulPayment
(
    {
        notifySuccessfulDepositHoldToBusiness,
        getOrderFullDetailsByOrderIdDB,
        notifySuccessfulDepositHoldToTelegramGroup
    }
)
    {
        if
        (
            !notifySuccessfulDepositHoldToBusiness
        )
            {
                throw new Error("buildProcessSuccessfulPayment must have notifySuccessfulDepositHoldToBusiness")
            }

        if
        (
            !getOrderFullDetailsByOrderIdDB
        )
            {
                throw new Error("buildProcessSuccessfulPayment must have getOrderFullDetailsByOrderIdDB")
            }

        if
        (
            !notifySuccessfulDepositHoldToTelegramGroup
        )
            {
                throw new Error("buildProcessSuccessfulPayment must have notifySuccessfulDepositHoldToTelegramGroup")
            }

        return async function processSuccessfulPayment
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
                        throw new Error("processSuccessfulPayment must have orderId")
                    }

                const getOrderFullDetailsByOrderIdDBResult = await getOrderFullDetailsByOrderIdDB(
                    {
                        orderId: orderId
                    }
                );

                if
                (
                    !getOrderFullDetailsByOrderIdDBResult
                )
                    {
                        throw new Error(`processSuccessfulPayment | Order Not Found | ${orderId}`)
                    }

                const notifySuccessfulDepositHoldToBusinessResult = await notifySuccessfulDepositHoldToBusiness(
                    {
                        orderId: orderId,
                        ownerFirstName: getOrderFullDetailsByOrderIdDBResult.ownerTitle,
                        businessName: getOrderFullDetailsByOrderIdDBResult.businessName,
                        businessEmail: getOrderFullDetailsByOrderIdDBResult.businessEmail,
                        creatorInstagramHandle: getOrderFullDetailsByOrderIdDBResult.creator.instagramHandle,
                        businessPhoneNumber: getOrderFullDetailsByOrderIdDBResult.businessPhoneNumber
                    }
                );

                const notifySuccessfulDepositHoldToTelegramGroupResult = await notifySuccessfulDepositHoldToTelegramGroup(
                    {
                        telegramGroupMessageId: getOrderFullDetailsByOrderIdDBResult.telegramGroupMessageId,
                        orderId: getOrderFullDetailsByOrderIdDBResult._id,
                        ownerTitle: getOrderFullDetailsByOrderIdDBResult.ownerTitle,
                        businessName: getOrderFullDetailsByOrderIdDBResult.businessName,
                        businessPhoneNumber: getOrderFullDetailsByOrderIdDBResult.businessPhoneNumber,
                        businessEmail: getOrderFullDetailsByOrderIdDBResult.businessEmail,
                        pakcageTitle: getOrderFullDetailsByOrderIdDBResult.package.title,
                        creatorFirstName: getOrderFullDetailsByOrderIdDBResult.creator.firstName,
                        creatorLastName: getOrderFullDetailsByOrderIdDBResult.creator.lastName,
                        creatorInstagramHandle: getOrderFullDetailsByOrderIdDBResult.creator.instagramHandle,
                        creatorEmail: getOrderFullDetailsByOrderIdDBResult.creator.email,
                        creatorPhoneNumber: getOrderFullDetailsByOrderIdDBResult.creator.phoneNumber
                    }
                );

                const result = {
                    notifySuccessfulDepositHoldToBusinessResult: notifySuccessfulDepositHoldToBusinessResult,
                    notifySuccessfulDepositHoldToTelegramGroupResult: notifySuccessfulDepositHoldToTelegramGroupResult
                }

                return result;
            }
    }