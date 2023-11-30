module.exports = function buildNotifyReturnFromStripePayment
(
    {
        notifyRerutnFromBankOnTlgrmGroup,
        getOrderFullDetailsByOrderIdDB
    }
)
    {
        if
        (
            !notifyRerutnFromBankOnTlgrmGroup
        )
            {
                throw new Error('buildNotifyReturnFromStripePayment must have notifyRerutnFromBankOnTlgrmGroup.');
            }

        if
        (
            !getOrderFullDetailsByOrderIdDB
        )
            {
                throw new Error('buildNotifyReturnFromStripePayment must have getOrderFullDetailsByOrderIdDB.');
            }
        return async function notifyReturnFromStripePayment
        (
            {
                notifyReturnFromStripePaymentInfo
            }
        )
            {
                if
                (
                    !notifyReturnFromStripePaymentInfo
                )
                    {
                        throw new Error('notifyReturnFromStripePayment must have notifyReturnFromStripePaymentInfo.');
                    }
                else if
                (
                    !notifyReturnFromStripePaymentInfo.orderId
                )
                    {
                        throw new Error('notifyReturnFromStripePayment>notifyReturnFromStripePaymentInfo must have orderId.');
                    }

                const orderId = notifyReturnFromStripePaymentInfo.orderId;

                const getOrderFullDetailsByOrderIdDBResult = await getOrderFullDetailsByOrderIdDB(
                    {
                        orderId:orderId
                    }
                );

                const notifyRerutnFromBankOnTlgrmGroupResult = await notifyRerutnFromBankOnTlgrmGroup(
                    {
                        telegramGroupMessageId: getOrderFullDetailsByOrderIdDBResult.telegramGroupMessageId,
                        orderId: getOrderFullDetailsByOrderIdDBResult.orderId,
                        creator: getOrderFullDetailsByOrderIdDBResult.creator,
                        package: getOrderFullDetailsByOrderIdDBResult.package,
                    }
                );

                return true;

            }
    }