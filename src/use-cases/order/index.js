const buildCreateOrder = require('./create-order');
const buildGetPaymentUrl = require('./get-payment-url');
const buildReturnFromStripePayment = require('./returnFromStripePayment');
const buildNotifyRerutnFromBankOnTlgrmGroup = require('./notify-rerutnFromBank-on-tlgrm-group');
const buildNotifyCreatePaymentOrderOnTlgrmGroup = require('./notify-create-payment-order-on-tlgrm-group');

module.exports = function
(
    {
        makeOrder,
        createOrderDB,
        getPackageById,
        createPaymentLinkStripe,
        createPackageDepositStripePriceId,
        RECIPET_BASE_URL,
        sendMessageTLGRM,
        LETTUCESOCIAL_GROUP_TELEMGRA_ID
    }
)
    {
        const getPaymentUrl = buildGetPaymentUrl(
            {
                createPackageDepositStripePriceId: createPackageDepositStripePriceId,
                createPaymentLinkStripe: createPaymentLinkStripe,
                getPackageById: getPackageById
            }
        );

        const notifyCreatePaymentOrderOnTlgrmGroup = buildNotifyCreatePaymentOrderOnTlgrmGroup(
            {
                sendMessageTLGRM: sendMessageTLGRM,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID
            }
        );

        const createOrder= buildCreateOrder(
            {
                makeOrder: makeOrder,
                createOrderDB: createOrderDB,
                getPaymentUrl: getPaymentUrl,
                notifyCreatePaymentOrderOnTlgrmGroup: notifyCreatePaymentOrderOnTlgrmGroup
            }
        );

        const notifyRerutnFromBankOnTlgrmGroup = buildNotifyRerutnFromBankOnTlgrmGroup(
            {
                sendMessageTLGRM: sendMessageTLGRM,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID
            }
        );

        const returnFromStripePayment = buildReturnFromStripePayment(
            {
                RECIPET_BASE_URL: RECIPET_BASE_URL,
                notifyRerutnFromBankOnTlgrmGroup:notifyRerutnFromBankOnTlgrmGroup
            }
        );
        
        const services = Object.freeze(
            {
                createOrder,
                returnFromStripePayment
            }
        );

        return services;
    }