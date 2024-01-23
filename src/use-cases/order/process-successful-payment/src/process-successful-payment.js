module.exports = function buildProcessSuccessfulPayment
(
    {
        notifySuccessfulDepositHoldToBusiness,
        getOrderFullDetailsByOrderIdDB
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

                console.log(getOrderFullDetailsByOrderIdDBResult);

                const notifySuccessfulDepositHoldToBusinessResult = await notifySuccessfulDepositHoldToBusiness(
                    {
                        ownerFirstName: getOrderFullDetailsByOrderIdDBResult.ownerTitle,
                        businessName: getOrderFullDetailsByOrderIdDBResult.businessName,
                        businessEmail: getOrderFullDetailsByOrderIdDBResult.businessEmail,
                        creatorInstagramHandle: getOrderFullDetailsByOrderIdDBResult.creator.instagramHandle,
                        businessPhoneNumber: getOrderFullDetailsByOrderIdDBResult.businessPhoneNumber
                    }
                );

                return notifySuccessfulDepositHoldToBusinessResult;
            }
    }