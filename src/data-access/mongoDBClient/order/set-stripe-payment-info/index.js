const buildTranslateSetStripePaymentInfoResponse = require('./src/translate-set-stripe-payment-info-response');
const buildCreateSetStripePaymentInfoOptions = require('./src/create-set-stripe-payment-info-options');
const buildSetStripePaymentInfo = require('./src/set-stripe-payment-info');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const translateSetStripePaymentInfoResponse = buildTranslateSetStripePaymentInfoResponse();

        const createSetStripePaymentInfoOptions = buildCreateSetStripePaymentInfoOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setStripePaymentInfo = buildSetStripePaymentInfo(
            {
                getDb: getDb,
                createOptions: createSetStripePaymentInfoOptions,
                translateResponse: translateSetStripePaymentInfoResponse
            }
        );

        const services = Object.freeze(
            {
                setStripePaymentInfo
            }
        );

        return services;
    }