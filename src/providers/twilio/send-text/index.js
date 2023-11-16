const buildSendText = require('./src/send-text');

module.exports = function
(
    {
        getClient,
        TOWILIO_SMS_NUMBER
    }
)
    {
        const sendText = buildSendText(
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