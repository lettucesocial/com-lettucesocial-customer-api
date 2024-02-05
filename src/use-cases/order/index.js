const buildCreateOrder = require('./create-order');
const buildGetPaymentUrl = require('./get-payment-url');
const buildReturnFromStripePayment = require('./returnFromStripePayment');
const buildNotifyRerutnFromBankOnTlgrmGroup = require('./notify-rerutnFromBank-on-tlgrm-group');
const buildNotifyCreatePaymentOrderOnTlgrmGroup = require('./notify-create-payment-order-on-tlgrm-group');
const buildGetOrderById = require('./get-order-by-id');
const buildSetOrderBusiness= require('./set-order-business');
const buildUpdateOrderBusinessOnTlgrmGroup = require('./update-order-business-on-tlgrm-group');
const buildNotifyReturnFromStripePayment = require('./notify-return-from-stripe-payment');

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
        LETTUCESOCIAL_GROUP_TELEMGRA_ID,
        getOrderByIdDB,
        setOrderBusinessDB,
        setOrderTelegramGroupMessageIdDB,
        getOrderFullDetailsByOrderIdDB,
        editMessageTLGRM,
        getDayOfWeek,
        sendEmailWithTemplate,
        sendText,
        setStripePaymentInfoDB,
        setStripeCheckoutInfoDB,
        getCustomerStripe,
        escapedMessageForMarkdownV2Style
    }
)
    {
        const getPaymentUrl = buildGetPaymentUrl(
            {
                createPackageDepositStripePriceId: createPackageDepositStripePriceId,
                createPaymentLinkStripe: createPaymentLinkStripe,
                getPackageById: getPackageById,
                setStripePaymentInfoDB: setStripePaymentInfoDB
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
                notifyCreatePaymentOrderOnTlgrmGroup: notifyCreatePaymentOrderOnTlgrmGroup,
                setOrderTelegramGroupMessageIdDB: setOrderTelegramGroupMessageIdDB,
                
            }
        );

        const notifyRerutnFromBankOnTlgrmGroup = buildNotifyRerutnFromBankOnTlgrmGroup(
            {
                editMessageTLGRM: editMessageTLGRM,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID
            }
        );

        const { processSuccessfulPayment } = require('./process-successful-payment')(
            {
                getDayOfWeek: getDayOfWeek,
                sendEmailWithTemplate: sendEmailWithTemplate,
                sendText: sendText,
                getOrderFullDetailsByOrderIdDB: getOrderFullDetailsByOrderIdDB,
                editMessageTLGRM: editMessageTLGRM,
                escapedMessageForMarkdownV2Style: escapedMessageForMarkdownV2Style,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID
            }
        )

        const returnFromStripePayment = buildReturnFromStripePayment(
            {
                RECIPET_BASE_URL: RECIPET_BASE_URL,
                notifyRerutnFromBankOnTlgrmGroup:notifyRerutnFromBankOnTlgrmGroup,
                processSuccessfulPayment: processSuccessfulPayment
            }
        );

        const getOrderById = buildGetOrderById(
            {
                getOrderByIdDB: getOrderByIdDB
            }
        );

        const updateOrderBusinessOnTlgrmGroup = buildUpdateOrderBusinessOnTlgrmGroup(
            {
                editMessageTLGRM: editMessageTLGRM,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID
            }
        );

        const setOrderBusiness = buildSetOrderBusiness(
            {
                setOrderBusinessDB: setOrderBusinessDB,
                updateOrderBusinessOnTlgrmGroup: updateOrderBusinessOnTlgrmGroup,
                getOrderFullDetailsByOrderIdDB: getOrderFullDetailsByOrderIdDB
            }
        );

        const notifyReturnFromStripePayment =  buildNotifyReturnFromStripePayment(
            {
                getOrderFullDetailsByOrderIdDB: getOrderFullDetailsByOrderIdDB,
                notifyRerutnFromBankOnTlgrmGroup: notifyRerutnFromBankOnTlgrmGroup
            }
        );

        const { processStipeWebhookRequest } = require('./process-stipe-webhook-request')(
            {
                processSuccessfulPayment: processSuccessfulPayment,
                setStripeCheckoutInfoDB: setStripeCheckoutInfoDB,
                getCustomerStripe: getCustomerStripe,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID,
                sendMessageTLGRM: sendMessageTLGRM
            }
        );
        
        const services = Object.freeze(
            {
                createOrder,
                returnFromStripePayment,
                getOrderById,
                setOrderBusiness,
                notifyReturnFromStripePayment,
                processStipeWebhookRequest
            }
        );

        return services;
    }