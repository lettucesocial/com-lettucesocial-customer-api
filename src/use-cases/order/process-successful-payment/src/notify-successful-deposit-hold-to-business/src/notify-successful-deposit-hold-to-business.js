module.exports = function buildNotifySuccessfulDepositHoldToBusiness
(
    {
        sendSuccessfulDepositHoldEmailToBusiness,
        sendSuccessfulDepositHoldSMSToBusiness
    }
)
    {

        if
        (
            !sendSuccessfulDepositHoldEmailToBusiness
        )
            {
                throw new Error('buildNotifySuccessfulDepositHoldToBusiness must have sendSuccessfulDepositHoldEmailToBusiness.');
            }

        if
        (
            !sendSuccessfulDepositHoldSMSToBusiness
        )
            {
                throw new Error('buildNotifySuccessfulDepositHoldToBusiness must have sendSuccessfulDepositHoldSMSToBusiness.');
            }

        return async function notifySuccessfulDepositHoldToBusiness
        (
            {
                ownerFirstName,
                businessName,
                businessEmail,
                creatorInstagramHandle,
                businessPhoneNumber
            }
        )
            {

                if
                (
                    !ownerFirstName
                )
                    {
                        throw new Error("notifySuccessfulDepositHoldToBusiness must have ownerFirstName")
                    }

                if
                (
                    !businessName
                )
                    {
                        throw new Error("notifySuccessfulDepositHoldToBusiness must have businessName")
                    }

                if
                (
                    !businessEmail
                )
                    {
                        throw new Error("notifySuccessfulDepositHoldToBusiness must have businessEmail")
                    }

                if
                (
                    !creatorInstagramHandle
                )
                    {
                        throw new Error("notifySuccessfulDepositHoldToBusiness must have creatorInstagramHandle")
                    }

                if
                (
                    !businessPhoneNumber
                )
                    {
                        throw new Error("notifySuccessfulDepositHoldToBusiness must have businessPhoneNumber")
                    }

                const sendSuccessfulDepositHoldEmailToBusinessResult = await sendSuccessfulDepositHoldEmailToBusiness(
                    {
                        ownerFirstName: ownerFirstName,
                        businessName: businessName,
                        businessEmail: businessEmail,
                        creatorInstagramHandle: creatorInstagramHandle
                    }
                );

                const sendSuccessfulDepositHoldSMSToBusinessResult = await sendSuccessfulDepositHoldSMSToBusiness(
                    {
                        ownerFirstName: ownerFirstName,
                        businessName: businessName,
                        businessEmail: businessEmail,
                        businessPhoneNumber: businessPhoneNumber
                    }
                );

                const result = {
                    sms: sendSuccessfulDepositHoldSMSToBusinessResult,
                    email: sendSuccessfulDepositHoldEmailToBusinessResult
                };

                return result;

            }
    }