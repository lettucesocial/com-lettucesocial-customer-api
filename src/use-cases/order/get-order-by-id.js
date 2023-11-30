module.exports = function buildGetOrderById
(
    {
        getOrderByIdDB
    }
)
    {
        if
        (
            !getOrderByIdDB
        )
            {
                throw new Error('buildGetOrderById must have getOrderByIdDB.');
            }

        return async function getOrderById
        (
            {
                orderId
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error('getOrderById must have orderId.');
                    }

                const getOrderByIdDBResult = await getOrderByIdDB(
                    {
                        orderId: orderId
                    }
                );

                return getOrderByIdDBResult;

            }
    }