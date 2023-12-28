module.exports = function buildSendReceivedRequestNotificationEmailToBusiness
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
                throw new Error("buildSendReceivedRequestNotificationEmailToBusiness must have sendEmailWithTemplate")
            }

        const WELCOME_EMAIL_TO_BUSINESS_MAILGUN_TEMPLATE_NAME = 'welcome-email-to-business'

        return async function sendReceivedRequestNotificationEmailToBusiness
        (
            {
                ownerFirstName,
                businessEmail
            }
        )
            {
                if
                (
                    !ownerFirstName
                )
                    {
                        throw new Error("sendReceivedRequestNotificationEmailToBusiness must have ownerFirstName")
                    }

                if
                (
                    !businessEmail
                )
                    {
                        throw new Error("sendReceivedRequestNotificationEmailToBusiness must have businessEmail")
                    }

                const variables = {
                    business_owner_first_name: ownerFirstName,
                }

                const sendEmailWithTemplateResult = await sendEmailWithTemplate(
                    {
                        from : 'hello@lettucesocial.com',
                        to: businessEmail,
                        bcc:'mxzadeh@gmail.com',
                        subject: 'Welcome to the LettuceSocial Community!',
                        template: WELCOME_EMAIL_TO_BUSINESS_MAILGUN_TEMPLATE_NAME,
                        variables: variables,
                        subdomain: 'hello'
                    }
                );


                return sendEmailWithTemplateResult;
            }
    }