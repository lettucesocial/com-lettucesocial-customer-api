module.exports = function buildCreateSetOrderBusinessOptions
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
                throw new Error('buildCreateSetOrderBusinessOptions must have ObjectId.');
            }

        return function createSetOrderBusinessOptions
        (
            {
                orderId,
                businessId
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error('createSetOrderBusinessOptions must have orderId.');
                    }

                if
                (
                    !businessId
                )
                    {
                        throw new Error('createSetOrderBusinessOptions must have businessId.');
                    }

                const orderObjectId = new ObjectId(
                    orderId
                );

                const businessObjectId = new ObjectId(
                    businessId
                );

                const filter = {
                    "_id": orderObjectId
                };

                const update = {
                    "$set": {
                        business: businessObjectId
                    }
                };

                const options = {
                    filter: filter,
                    update : update
                };

                return options;
            }
    }