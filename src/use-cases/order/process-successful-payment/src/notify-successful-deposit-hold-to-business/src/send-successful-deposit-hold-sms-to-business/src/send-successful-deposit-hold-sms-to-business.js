module.exports = function buildSendSuccessfulDepositHoldSMSToBusiness
(
    {
        getSendSuccessfulDepositHoldSMSToBusinessContent,
        sendText
    }
)
    {
        if
        (
            !getSendSuccessfulDepositHoldSMSToBusinessContent
        )
            {
                throw new Error('buildSendSuccessfulDepositHoldSMSToBusiness must have getSendSuccessfulDepositHoldSMSToBusinessContent.');
            }

        if
        (
            !sendText
        )
            {
                throw new Error('buildSendSuccessfulDepositHoldSMSToBusiness must have sendText.');
            }

        return async function sendSuccessfulDepositHoldSMSToBusiness
        (
            {
                ownerFirstName,
                businessName,
                businessEmail,
                businessPhoneNumber
            }
        )
            {
                if
                (
                    !ownerFirstName
                )
                    {
                        throw new Error("sendSuccessfulDepositHoldSMSToBusiness must have ownerFirstName")
                    }

                if
                (
                    !businessName
                )
                    {
                        throw new Error("sendSuccessfulDepositHoldSMSToBusiness must have businessName")
                    }

                if
                (
                    !businessEmail
                )
                    {
                        throw new Error("sendSuccessfulDepositHoldSMSToBusiness must have businessEmail")
                    }

                if
                (
                    !businessPhoneNumber
                )
                    {
                        throw new Error("sendSuccessfulDepositHoldSMSToBusiness must have businessPhoneNumber")
                    }

                    


                const message = getSendSuccessfulDepositHoldSMSToBusinessContent(
                    {
                        ownerFirstName : ownerFirstName,
                        businessName: businessName,
                        businessEmail: businessEmail
                    }
                );

                const sendTextResult = await sendText(
                    {
                        from: '8056670793',
                        to: businessPhoneNumber,
                        message: message
                    }
                );

                return sendTextResult;
            }
    }