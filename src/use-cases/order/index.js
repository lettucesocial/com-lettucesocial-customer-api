const buildCreateOrder = require('./create-order');
const buildGetPaymentUrl = require('./get-payment-url');

module.exports = function
(
    {
        makeOrder,
        createOrderDB,
        getPackageById,
        createPaymentLinkStripe,
        createPackageDepositStripePriceId
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

        const createOrder= buildCreateOrder(
            {
                makeOrder: makeOrder,
                createOrderDB: createOrderDB,
                getPaymentUrl: getPaymentUrl
            }
        );
        
        const services = Object.freeze(
            {
                createOrder
            }
        );

        return services;
    }