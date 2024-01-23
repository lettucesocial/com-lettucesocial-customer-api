module.exports = function buildSetStripeCheckoutInfo
(
    {
        getDb,
        createOptions,
        translateResponse
    }
)
    {
        if
        (
            !getDb
        )
            {
                throw new Error('buildSetStripeCheckoutInfo must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetStripeCheckoutInfo must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetStripeCheckoutInfo must have translateResponse.');
            }

        const COLLECTION_NAME = 'orders';
        
        return async function setStripeCheckoutInfo
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
                        throw new Error('setStripeCheckoutInfo must have orderId.');
                    }

                if
                (
                    !stripeCheckoutInfo
                )
                    {
                        throw new Error('setStripeCheckoutInfo must have stripeCheckoutInfo.');
                    }

                if
                (
                    !ownerTitle
                )
                    {
                        throw new Error('setStripeCheckoutInfo must have ownerTitle.');
                    }

                if
                (
                    !businessName
                )
                    {
                        throw new Error('setStripeCheckoutInfo must have businessName.');
                    }

                if
                (
                    !businessEmail
                )
                    {
                        throw new Error('setStripeCheckoutInfo must have businessEmail.');
                    }

                if
                (
                    !businessPhoneNumber
                )
                    {
                        throw new Error('setStripeCheckoutInfo must have businessPhoneNumber.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        orderId:orderId,
                        stripeCheckoutInfo: stripeCheckoutInfo,
                        ownerTitle: ownerTitle,
                        businessName: businessName,
                        businessEmail: businessEmail,
                        businessPhoneNumber: businessPhoneNumber
                    }
                );

                const response = await collection.updateOne(
                    options.filter,
                    options.update
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;  
            }
    }