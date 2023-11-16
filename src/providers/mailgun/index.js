
module.exports = function
(
    {
        fetch,
        MAILGUN_SEND_EMAIL_URL
    }
)
    {
        const { sendEmailWithTemplate } = require('./send-email-with-template')(
            {
                fetch: fetch,
                MAILGUN_SEND_EMAIL_URL: MAILGUN_SEND_EMAIL_URL
            }
        );

        const services = Object.freeze(
            {
                sendEmailWithTemplate
            }
        );

        return services;
    }