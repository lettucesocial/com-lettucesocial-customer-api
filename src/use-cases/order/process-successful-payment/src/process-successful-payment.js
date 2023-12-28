module.exports = function buildProcessSuccessfulPayment
(
    {
        notifySuccessfulDepositHoldToBusiness
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

        return async function processSuccessfulPayment
        ()
            {
                const notifySuccessfulDepositHoldToBusinessResult = await notifySuccessfulDepositHoldToBusiness(
                    {
                        ownerFirstName: ownerFirstName,
                        businessName: businessName,
                        businessEmail: businessEmail,
                        creatorInstagramHandle: creatorInstagramHandle,
                        businessPhoneNumber: businessPhoneNumber
                    }
                );

                return notifySuccessfulDepositHoldToBusinessResult;
            }
    }