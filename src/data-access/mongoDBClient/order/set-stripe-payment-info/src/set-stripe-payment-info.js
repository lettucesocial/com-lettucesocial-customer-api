module.exports = function buildSetStripePaymentInfo
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
                throw new Error('buildSetStripePaymentInfo must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetStripePaymentInfo must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetStripePaymentInfo must have translateResponse.');
            }

        const COLLECTION_NAME = 'orders';

        return async function setStripePaymentInfo
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
                        throw new Error('setStripePaymentInfo must have orderId.');
                    }

                if
                (
                    !stripePaymentInfo
                )
                    {
                        throw new Error('setStripePaymentInfo must have stripePaymentInfo.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        orderId:orderId,
                        stripePaymentInfo: stripePaymentInfo
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