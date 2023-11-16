module.exports = function buildSendEmailWithTemplate
(
    {
        fetch,
        MAILGUN_SEND_EMAIL_URL,
        createSendEmailWithTemplateOptions,
        translateSendEmailWithTemplateResponse
    }
)
    {
        if
        (
            !fetch
        )
            {
                throw new Error("buildSendEmailWithTemplate must have fetch")
            }

        if
        (
            !MAILGUN_SEND_EMAIL_URL
        )
            {
                throw new Error("buildSendEmailWithTemplate must have MAILGUN_SEND_EMAIL_URL")
            }

        if
        (
            !createSendEmailWithTemplateOptions
        )
            {
                throw new Error("buildSendEmailWithTemplate must have createSendEmailWithTemplateOptions")
            }

        if
        (
            !translateSendEmailWithTemplateResponse
        )
            {
                throw new Error("buildSendEmailWithTemplate must have translateSendEmailWithTemplateResponse")
            }
            
        return async function sendEmailWithTemplate
        (
            {
                from,
                to,
                subject,
                template,
                variables
            }
        )
            {
                if
                (
                    !from
                )
                    {
                        throw new Error("sendEmailWithTemplate must have from")
                    }

                if
                (
                    !to
                )
                    {
                        throw new Error("sendEmailWithTemplate must have to")
                    }

                if
                (
                    !subject
                )
                    {
                        throw new Error("sendEmailWithTemplate must have subject")
                    }

                if
                (
                    !template
                )
                    {
                        throw new Error("sendEmailWithTemplate must have template")
                    }

                if
                (
                    !variables
                )
                    {
                        throw new Error("sendEmailWithTemplate must have variables")
                    }

                const options = createSendEmailWithTemplateOptions(
                    {
                        from: from,
                        to: to,
                        subject: subject,
                        template: template,
                        variables: variables
                    }
                );

                try
                    {
                        const response = await fetch(
                            MAILGUN_SEND_EMAIL_URL,
                            options
                        );
                
                        const result = await translateSendEmailWithTemplateResponse(
                            {
                                response: response
                            }
                        );
                        
                        return result;
                    }
                catch (error)
                    {
                        console.log('sendEmailWithTemplate have error');
                        console.log(error);
                        throw error;
                    }
                
            }
    }