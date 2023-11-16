const buildTranslateSendEmailWithTemplateResponse = require('./src/translate-send-email-with-template-response');
const buildCreateSendEmailWithTemplateOptions = require('./src/create-send-email-with-template-options');
const buildSendEmailWithTemplate = require('./src/send-email-with-template');

module.exports = function
(
    {
        MAILGUN_SEND_EMAIL_URL,
        fetch
    }
)
    {
        const translateSendEmailWithTemplateResponse = buildTranslateSendEmailWithTemplateResponse();

        const createSendEmailWithTemplateOptions = buildCreateSendEmailWithTemplateOptions();

        const sendEmailWithTemplate = buildSendEmailWithTemplate(
            {
                fetch:fetch,
                MAILGUN_SEND_EMAIL_URL: MAILGUN_SEND_EMAIL_URL,
                createSendEmailWithTemplateOptions: createSendEmailWithTemplateOptions,
                translateSendEmailWithTemplateResponse: translateSendEmailWithTemplateResponse
            }
        );

        const services = Object.freeze(
            {
                sendEmailWithTemplate
            }
        );

        return services;
    }