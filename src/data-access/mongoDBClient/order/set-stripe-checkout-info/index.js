const buildTransalteSetStripeCheckoutInfoResponse = require('./src/translate-set-stripe-checkout-info-response');
const buildCreateSetStripeCheckoutInfoOptions = require('./src/create-set-stripe-checkout-info-options');
const buildSetStripeCheckoutInfo = require('./src/set-stripe-checkout-info');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const transalteSetStripeCheckoutInfoResponse = buildTransalteSetStripeCheckoutInfoResponse();

        const createSetStripeCheckoutInfoOptions = buildCreateSetStripeCheckoutInfoOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setStripeCheckoutInfo = buildSetStripeCheckoutInfo(
            {
                getDb: getDb,
                createOptions: createSetStripeCheckoutInfoOptions,
                translateResponse: transalteSetStripeCheckoutInfoResponse
            }
        );

        const services = Object.freeze(
            {
                setStripeCheckoutInfo
            }
        );

        return services;
    }