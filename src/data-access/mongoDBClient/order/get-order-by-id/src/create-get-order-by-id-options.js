module.exports = function buildCreateGetOrderByIdOptions
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
                throw new Error('buildCreateGetOrderByIdOptions must have ObjectId.');
            }
        return function createGetOrderByIdOptions
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
                        throw new Error('createGetOrderByIdOptions must have orderId.');
                    }

                const orderObjectId = new ObjectId(
                    orderId
                );

                const filter = {
                    "_id": orderObjectId
                };

                return filter;
                
            }
    }