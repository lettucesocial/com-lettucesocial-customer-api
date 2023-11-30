module.exports = function buildCreateGetOrderFullDetailsByOrderIdOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateGetOrderFullDetailsByOrderIdOptions must have ObjectId.');
            }
        return function createGetOrderFullDetailsByOrderIdOptions
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
                        throw new Error('createGetOrderFullDetailsByOrderIdOptions must have orderId.');
                    }

                const orderObjectId = new ObjectId(
                    orderId
                );

                const filter = {
                    "orderId": orderObjectId
                };

                return filter;
                
            }
    }