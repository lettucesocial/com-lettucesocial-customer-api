module.exports = function buildCreateSetStripePaymentInfoOptions
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
                throw new Error('buildCreateSetStripePaymentInfoOptions must have ObjectId.');
            }

        return function createSetStripePaymentInfoOptions
        (
            {
                orderId,
                stripePaymentInfo
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error('createSetStripePaymentInfoOptions must have orderId.');
                    }

                if
                (
                    !stripePaymentInfo
                )
                    {
                        throw new Error('createSetStripePaymentInfoOptions must have stripePaymentInfo.');
                    }

                const orderObjectId = new ObjectId(
                    orderId
                );


                const filter = {
                    "_id": orderObjectId
                };

                const update = {
                    "$set": {
                        stripePaymentInfo: stripePaymentInfo
                    }
                };

                const options = {
                    filter: filter,
                    update : update
                };

                return options;

            }
    }