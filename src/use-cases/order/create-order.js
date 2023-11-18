module.exports = function buildCreateOrder
(
    {
        makeOrder,
        createOrderDB,
        getPaymentUrl,
        notifyCreatePaymentOrderOnTlgrmGroup
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

                const redirectUrl = `http://business.lettucesocial.com/receipt/${orderId}`;

                const getPaymentUrlResult = await getPaymentUrl(
                    {
                        packageId: order.getPackageId(),
                        redirectUrl: redirectUrl
                    }
                )

                return getPaymentUrlResult;
            }
    }