module.exports = function buildCreateOrder
(
    {
        makeOrder,
        createOrderDB,
        getPaymentUrl,
        notifyCreatePaymentOrderOnTlgrmGroup,
        setOrderTelegramGroupMessageIdDB
    }
)
    {
        if
        (
            !makeOrder
        )
            {
                throw new Error('buildCreateOrder must have makeOrder.');
            }

        if
        (
            !createOrderDB
        )
            {
                throw new Error('buildCreateOrder must have createOrderDB.');
            }

        if
        (
            !getPaymentUrl
        )
            {
                throw new Error('buildCreateOrder must have getPaymentUrl.');
            }

        if
        (
            !notifyCreatePaymentOrderOnTlgrmGroup
        )
            {
                throw new Error('buildCreateOrder must have notifyCreatePaymentOrderOnTlgrmGroup.');
            }

        if
        (
            !setOrderTelegramGroupMessageIdDB
        )
            {
                throw new Error('buildCreateOrder must have setOrderTelegramGroupMessageIdDB.');
            }
            
        return async function createOrder
        (
            {
                createOrderInfo
            }
        )
            {

                const order = makeOrder(
                    createOrderInfo
                );

                const createOrderDBResult = await createOrderDB(
                    {
                        order: order
                    }
                );

                const orderId = createOrderDBResult.toString();

                const notifyCreatePaymentOrderOnTlgrmGroupResult = await notifyCreatePaymentOrderOnTlgrmGroup(
                    {
                        orderId: orderId
                    }
                );

                const setOrderTelegramGroupMessageIdDBResult = await setOrderTelegramGroupMessageIdDB(
                    {
                        orderId: orderId,
                        telegramGroupMessageId: notifyCreatePaymentOrderOnTlgrmGroupResult
                    }
                );


                const redirectUrl = `http://business.lettucesocial.com/receipt/${orderId}`;

                const getPaymentUrlResult = await getPaymentUrl(
                    {
                        packageId: order.getPackageId(),
                        redirectUrl: redirectUrl,
                        orderId: orderId
                    }
                )

                return getPaymentUrlResult;
            }
    }