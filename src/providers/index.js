
var fetch = require('node-fetch');

module.exports = function
(
    {
        MAILGUN_API_KEY,
        TWILIO_CREDENTIALS,
        TOWILIO_SMS_NUMBER,
        STRIPE_SECRET_KEY,
        BOT_TOKEN
    }
)
    {
        const mailgunServices = require('./mailgun')(
            {
                fetch: fetch,
                MAILGUN_API_KEY:MAILGUN_API_KEY
            }
        );

        const twiliogunServices = require('./twilio')(
            {
                TWILIO_CREDENTIALS: TWILIO_CREDENTIALS,
                TOWILIO_SMS_NUMBER: TOWILIO_SMS_NUMBER
            }
        );

        const stripeServices = require('./stripe')(
            {
                STRIPE_SECRET_KEY: STRIPE_SECRET_KEY
            }
        );

        const tlgrmBotServices = require('./telegramBotApi')(
            {
                BOT_TOKEN: BOT_TOKEN,
                fetch: fetch,
            }
        )

        const services = Object.freeze(
            {
                mailgun: mailgunServices,
                twilio: twiliogunServices,
                stripe: stripeServices,
                tlgrmBot: tlgrmBotServices
            }
        );

        return services;
    }