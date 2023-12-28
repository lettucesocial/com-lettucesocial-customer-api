module.exports = function buildSendEmailWithTemplate
(
    {
        fetch,
        getSendEmailUrl,
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
            !getSendEmailUrl
        )
            {
                throw new Error("buildSendEmailWithTemplate must have getSendEmailUrl")
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
                variables,
                subdomain
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

                if
                (
                    !subdomain
                )
                    {
                        throw new Error("sendEmailWithTemplate must have subdomain")
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
                        const sendEmailUrl = getSendEmailUrl(
                            {
                                subdomain: subdomain
                            }
                        )
                        const response = await fetch(
                            sendEmailUrl,
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