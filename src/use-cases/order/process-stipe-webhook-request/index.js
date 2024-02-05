const buildProcessStripeTypeCheckoutSessionCompleted = require('./src/process-stripe-type-checkout-session-completed');
const buildProcessStipeWebhookRequest = require('./src/process-stipe-webhook-request');
const buildNotifyStipreWebhookRequestOnTelegramGroup= require('./src/notify-stipre-webhook-request-on-telegram-group');

module.exports = function
(
    {
        processSuccessfulPayment,
        setStripeCheckoutInfoDB,
        getCustomerStripe,
        LETTUCESOCIAL_GROUP_TELEMGRA_ID,
        sendMessageTLGRM
    }
)
    {

        const notifyStipreWebhookRequestOnTelegramGroup = buildNotifyStipreWebhookRequestOnTelegramGroup(
            {
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID,
                sendMessageTLGRM: sendMessageTLGRM
            }
        );

        const processStripeTypeCheckoutSessionCompleted = buildProcessStripeTypeCheckoutSessionCompleted(
            {
                processSuccessfulPayment: processSuccessfulPayment,
                setStripeCheckoutInfoDB: setStripeCheckoutInfoDB,
                getCustomerStripe: getCustomerStripe
            }
        );

        const processStipeWebhookRequest = buildProcessStipeWebhookRequest(
            {
                processStripeTypeCheckoutSessionCompleted: processStripeTypeCheckoutSessionCompleted,
                notifyStipreWebhookRequestOnTelegramGroup: notifyStipreWebhookRequestOnTelegramGroup
            }
        );

        const services = Object.freeze(
            {
                processStipeWebhookRequest
            }
        );

        return services;
    }