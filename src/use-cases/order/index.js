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
        editMessageTLGRM
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
                notifyCreatePaymentOrderOnTlgrmGroup: notifyCreatePaymentOrderOnTlgrmGroup,
                setOrderTelegramGroupMessageIdDB: setOrderTelegramGroupMessageIdDB
            }
        );

        const notifyRerutnFromBankOnTlgrmGroup = buildNotifyRerutnFromBankOnTlgrmGroup(
            {
                editMessageTLGRM: editMessageTLGRM,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID
            }
        );

        const returnFromStripePayment = buildReturnFromStripePayment(
            {
                RECIPET_BASE_URL: RECIPET_BASE_URL,
                notifyRerutnFromBankOnTlgrmGroup:notifyRerutnFromBankOnTlgrmGroup
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
        
        const services = Object.freeze(
            {
                createOrder,
                returnFromStripePayment,
                getOrderById,
                setOrderBusiness,
                notifyReturnFromStripePayment
            }
        );

        return services;
    }