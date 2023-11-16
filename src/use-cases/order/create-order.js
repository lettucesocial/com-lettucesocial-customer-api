module.exports = function buildCreateOrder
(
    {
        makeOrder,
        createOrderDB,
        getPaymentUrl
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

                const getPaymentUrlResult = await getPaymentUrl(
                    {
                        packageId: order.getPackageId()
                    }
                )

                return getPaymentUrlResult;
            }
    }