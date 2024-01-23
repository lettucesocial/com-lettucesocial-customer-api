module.exports = function buildCreateSetStripeCheckoutInfoOptions
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
                throw new Error('buildCreateSetStripeCheckoutInfoOptions must have ObjectId.');
            }
        return function createSetStripeCheckoutInfoOptions
        (
            {
                orderId,
                stripeCheckoutInfo,
                ownerTitle,
                businessName,
                businessEmail,
                businessPhoneNumber
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error('createSetStripeCheckoutInfoOptions must have orderId.');
                    }

                if
                (
                    !stripeCheckoutInfo
                )
                    {
                        throw new Error('createSetStripeCheckoutInfoOptions must have stripeCheckoutInfo.');
                    }

                if
                (
                    !ownerTitle
                )
                    {
                        throw new Error('createSetStripeCheckoutInfoOptions must have ownerTitle.');
                    }

                if
                (
                    !businessName
                )
                    {
                        throw new Error('createSetStripeCheckoutInfoOptions must have businessName.');
                    }

                if
                (
                    !businessEmail
                )
                    {
                        throw new Error('createSetStripeCheckoutInfoOptions must have businessEmail.');
                    }

                if
                (
                    !businessPhoneNumber
                )
                    {
                        throw new Error('createSetStripeCheckoutInfoOptions must have businessPhoneNumber.');
                    }

                const orderObjectId = new ObjectId(
                    orderId
                );


                const filter = {
                    "_id": orderObjectId
                };

                const update = {
                    "$set": {
                        stripeCheckoutInfo: stripeCheckoutInfo,
                        ownerTitle: ownerTitle,
                        businessName: businessName,
                        businessEmail: businessEmail,
                        businessPhoneNumber: businessPhoneNumber
                    }
                };

                const options = {
                    filter: filter,
                    update : update
                };

                return options;

            }
    }