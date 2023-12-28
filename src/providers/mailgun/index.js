
const buildGetSendEmailUrl = require('./get-send-email-url');

module.exports = function
(
    {
        fetch,
        MAILGUN_API_KEY
    }
)
    {

        const getSendEmailUrl = buildGetSendEmailUrl(
            {
                MAILGUN_API_KEY: MAILGUN_API_KEY
            }
        )

        const { sendEmailWithTemplate } = require('./send-email-with-template')(
            {
                fetch: fetch,
                getSendEmailUrl: getSendEmailUrl
            }
        );

        const services = Object.freeze(
            {
                sendEmailWithTemplate
            }
        );

        return services;
    }