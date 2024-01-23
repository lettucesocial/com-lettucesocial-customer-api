const { URLSearchParams } = require('url');
module.exports = function buildCreateSendEmailWithTemplateOptions
()
    {
        return function createSendEmailWithTemplateOptions
        (
            {
                from,
                to,
                subject,
                template,
                variables,
                bcc
            }
        )
            {
                if
                (
                    !from
                )
                    {
                        throw new Error("createSendEmailWithTemplateOptions must have from")
                    }

                if
                (
                    !to
                )
                    {
                        throw new Error("createSendEmailWithTemplateOptions must have to")
                    }

                if
                (
                    !subject
                )
                    {
                        throw new Error("createSendEmailWithTemplateOptions must have subject")
                    }

                if
                (
                    !template
                )
                    {
                        throw new Error("createSendEmailWithTemplateOptions must have template")
                    }

                if
                (
                    !variables
                )
                    {
                        throw new Error("createSendEmailWithTemplateOptions must have variables")
                    }

                const params = new URLSearchParams();
                
                params.append('from', from);
                params.append('to', to);
                params.append('subject', subject);
                params.append('template', template);
                params.append('h:X-Mailgun-Variables', JSON.stringify(variables));

                if
                (
                    bcc
                )
                    {
                        params.append('bcc', bcc);
                    }
       
                const options= {
                    method:"POST",
                    body: params
                };
        

                return options;
            }
    }