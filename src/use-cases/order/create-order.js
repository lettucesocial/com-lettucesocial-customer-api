module.exports = function buildCreateOrder
(
    {
        makeOrder,
        createOrderDB
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

                return createOrderDBResult;
            }
    }