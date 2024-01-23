const buildProcessStripeTypeCheckoutSessionCompleted = require('./src/process-stripe-type-checkout-session-completed');
const buildProcessStipeWebhookRequest = require('./src/process-stipe-webhook-request');

module.exports = function
(
    {
        processSuccessfulPayment,
        setStripeCheckoutInfoDB,
        getCustomerStripe
    }
)
    {

        const processStripeTypeCheckoutSessionCompleted = buildProcessStripeTypeCheckoutSessionCompleted(
            {
                processSuccessfulPayment: processSuccessfulPayment,
                setStripeCheckoutInfoDB: setStripeCheckoutInfoDB,
                getCustomerStripe: getCustomerStripe
            }
        );

        const processStipeWebhookRequest = buildProcessStipeWebhookRequest(
            {
                processStripeTypeCheckoutSessionCompleted: processStripeTypeCheckoutSessionCompleted
            }
        );

        const services = Object.freeze(
            {
                processStipeWebhookRequest
            }
        );

        return services;
    }