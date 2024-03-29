module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addOrder } = require('./add-order')
        (
            {
                getDb: getDb
            } 
        );


        const { getOrderById } = require('./get-order-by-id')(
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        );

        const {  setOrderBusiness } = require('./set-order-business')(
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        );

        
        const {  setOrderTelegramGroupMessageId } = require('./set-order-telegram-group-messageId')(
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        );

        const { setStripePaymentInfo } = require('./set-stripe-payment-info')(
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        );

        const { setStripeCheckoutInfo } = require('./set-stripe-checkout-info')(
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        );

        const services = Object.freeze(
            {
                addOrder,
                getOrderById,
                setOrderBusiness,
                setOrderTelegramGroupMessageId,
                setStripePaymentInfo,
                setStripeCheckoutInfo
            }
        );

        return services;

    }