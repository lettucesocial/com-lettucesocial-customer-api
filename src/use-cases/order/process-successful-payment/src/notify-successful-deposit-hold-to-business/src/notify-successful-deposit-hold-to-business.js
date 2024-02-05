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
                orderId,
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
                    !orderId
                )
                    {
                        throw new Error("notifySuccessfulDepositHoldToBusiness must have orderId")
                    }

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

                let result = {};
                    
                try
                    {
                        const sendSuccessfulDepositHoldEmailToBusinessResult = await sendSuccessfulDepositHoldEmailToBusiness(
                            {
                                ownerFirstName: ownerFirstName,
                                businessName: businessName,
                                businessEmail: businessEmail,
                                creatorInstagramHandle: creatorInstagramHandle
                            }
                        );

                        result.email = sendSuccessfulDepositHoldEmailToBusinessResult;


                    }
                catch
                (
                    error
                )
                    {
                        const sendSuccessfulDepositHoldEmailToBusinessErrorMessage = `#ERROR | ${orderId} | notifySuccessfulDepositHoldToBusiness > sendSuccessfulDepositHoldEmailToBusiness  | ${error.message}`;
                        result.emailError = sendSuccessfulDepositHoldEmailToBusinessErrorMessage
                    }
                

                try
                    {
                        const sendSuccessfulDepositHoldSMSToBusinessResult = await sendSuccessfulDepositHoldSMSToBusiness(
                            {
                                ownerFirstName: ownerFirstName,
                                businessName: businessName,
                                businessEmail: businessEmail,
                                businessPhoneNumber: businessPhoneNumber
                            }
                        );

                        result.sms = sendSuccessfulDepositHoldSMSToBusinessResult;
                    }
                catch
                (
                    error
                )
                    {
                        const sendSuccessfulDepositHoldSMSToBusinessResultErrorMessage = `#ERROR | ${orderId} | notifySuccessfulDepositHoldToBusiness > sendSuccessfulDepositHoldSMSToBusiness  | ${error.message}`;
                        result.smsError = sendSuccessfulDepositHoldSMSToBusinessResultErrorMessage;
                    }
                

                

                return result;

            }
    }