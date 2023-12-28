module.exports = function buildSendSuccessfulDepositHoldEmailToBusiness
(
    {
        sendEmailWithTemplate
    }
)
    {
        if
        (
            !sendEmailWithTemplate
        )
            {
                throw new Error("buildSendSuccessfulDepositHoldEmailToBusiness must have sendEmailWithTemplate")
            }

        const SUCCESSFUL_DEPOSIT_HOLD_EMAIL_TO_BUSINESS_MAILGUN_TEMPLATE_NAME = 'successful-deposit-hold-email-to-business'

        return async function sendSuccessfulDepositHoldEmailToBusiness
        (
            {
                ownerFirstName,
                businessName,
                businessEmail,
                creatorInstagramHandle
            }
        )
            {
                if
                (
                    !ownerFirstName
                )
                    {
                        throw new Error("sendSuccessfulDepositHoldEmailToBusiness must have ownerFirstName")
                    }

                if
                (
                    !businessName
                )
                    {
                        throw new Error("sendSuccessfulDepositHoldEmailToBusiness must have businessName")
                    }
                
                if
                (
                    !businessEmail
                )
                    {
                        throw new Error("sendSuccessfulDepositHoldEmailToBusiness must have businessEmail")
                    }

                if
                (
                    !creatorInstagramHandle
                )
                    {
                        throw new Error("sendSuccessfulDepositHoldEmailToBusiness must have creatorInstagramHandle")
                    }


                const variables = {
                    business_owner_first_name: ownerFirstName,
                    business_name: collaborationDetail.business.name,
                    creator_instagram_handle: creatorInstagramHandle
                }

                const sendEmailWithTemplateResult = await sendEmailWithTemplate(
                    {
                        from : 'hello@lettucesocial.com',
                        to: businessEmail,
                        bcc:'mxzadeh@gmail.com',
                        subject: 'LettuceSocial - We Received Your Collaboration Request',
                        template: SUCCESSFUL_DEPOSIT_HOLD_EMAIL_TO_BUSINESS_MAILGUN_TEMPLATE_NAME,
                        variables: variables,
                        subdomain: 'hello'
                    }
                );


                return sendEmailWithTemplateResult;
            }
    }