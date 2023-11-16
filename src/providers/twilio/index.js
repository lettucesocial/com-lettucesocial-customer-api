const buildGetClient = require('./get-client/get-client');

module.exports = function
(
    {
        TWILIO_CREDENTIALS,
        TOWILIO_SMS_NUMBER
    }
)
    {
        const getClient = buildGetClient(
            {
                ACCOUNT_SID: TWILIO_CREDENTIALS.ACCOUNT_SID,
                AUTH_TOKEN:TWILIO_CREDENTIALS.AUTH_TOKEN
            }
        );
        const { sendText } = require('./send-text')(
            {
                getClient: getClient,
                TOWILIO_SMS_NUMBER: TOWILIO_SMS_NUMBER
            }
        );

        const services = Object.freeze(
            {
                sendText
            }
        );

        return services;
    }