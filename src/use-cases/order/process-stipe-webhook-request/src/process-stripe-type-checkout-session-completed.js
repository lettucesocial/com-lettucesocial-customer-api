module.exports = function buildProcessStripeTypeCheckoutSessionCompleted
(
    {
        processSuccessfulPayment,
        setStripeCheckoutInfoDB,
        getCustomerStripe
    }
)
    {
        if
        (
            !processSuccessfulPayment
        )
            {
                throw new Error('buildProcessStripeTypeCheckoutSessionCompleted must have processSuccessfulPayment.');
            }

        if
        (
            !setStripeCheckoutInfoDB
        )
            {
                throw new Error('buildProcessStripeTypeCheckoutSessionCompleted must have setStripeCheckoutInfoDB.');
            }

        if
        (
            !getCustomerStripe
        )
            {
                throw new Error('buildProcessStripeTypeCheckoutSessionCompleted must have getCustomerStripe.');
            }

            

        return async function processStripeTypeCheckoutSessionCompleted
        (
            {
                stipeWebhookRequest
            }
        )
            {
                if
                (
                    !stipeWebhookRequest
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted must have stipeWebhookRequest.');
                    }
                else if
                (
                    !stipeWebhookRequest.type
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest must have type.');
                    }
                else if
                (
                    stipeWebhookRequest.type != "checkout.session.completed"
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>type must be checkout.session.completed.');
                    }
                else if
                (
                    !stipeWebhookRequest.data
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest must have data.');
                    }
                else if
                (
                    !stipeWebhookRequest.data.object
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data must have object.');
                    }
                
                if
                (
                    !stipeWebhookRequest.data.object.metadata
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object must have metadata.');
                    }

                else if
                (
                    !stipeWebhookRequest.data.object.metadata.order_id
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object>metadata must have order_id.');
                    }
                
                if
                (
                    !stipeWebhookRequest.data.object.status
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object must have status.');
                    }
                else if
                (
                    stipeWebhookRequest.data.object.status != "complete"
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object>status must be complete.');
                    }

                if
                (
                    !stipeWebhookRequest.data.object.custom_fields
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object must have custom_fields.');
                    }
                
                if
                (
                    !stipeWebhookRequest.data.object.custom_fields[0]
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object must have custom_fields[0].');
                    }
                else if
                (
                    !stipeWebhookRequest.data.object.custom_fields[0].text
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object>custom_fields[0] must have text.');
                    }
                else if
                (
                    !stipeWebhookRequest.data.object.custom_fields[0].text.value
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object>custom_fields[0]>text must have value.');
                    }

                if
                (
                    !stipeWebhookRequest.data.object.custom_fields[1]
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object must have custom_fields[1].');
                    }
                else if
                (
                    !stipeWebhookRequest.data.object.custom_fields[1].text
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object>custom_fields[1] must have text.');
                    }
                else if
                (
                    !stipeWebhookRequest.data.object.custom_fields[1].text.value
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object>custom_fields[1]>text must have value.');
                    }
                
                if
                (
                    !stipeWebhookRequest.data.object.customer
                )
                    {
                        throw new Error('processStripeTypeCheckoutSessionCompleted>stipeWebhookRequest>data>object must have customer.');
                    }
                

                const data = stipeWebhookRequest.data;
                const object = data.object;
                const metadata = object.metadata;
                const custom_fields = object.custom_fields;
                const order_id = metadata.order_id;

                const ownerTitle = custom_fields[0].text.value;
                const businessName = custom_fields[1].text.value;

                const customer = object.customer;

                const getCustomerStripeResult = await getCustomerStripe(
                    {
                        customerId: customer
                    }
                );


                const businessEmail = getCustomerStripeResult.email;
                const businessPhoneNumber = getCustomerStripeResult.phone;

                const setStripeCheckoutInfoDBResult = await setStripeCheckoutInfoDB(
                    {
                        orderId: order_id,
                        stripeCheckoutInfo: stipeWebhookRequest,
                        ownerTitle: ownerTitle,
                        businessName: businessName,
                        businessEmail: businessEmail,
                        businessPhoneNumber: businessPhoneNumber
                    }
                )

                const processSuccessfulPaymentResult = await processSuccessfulPayment(
                    {
                        orderId: order_id,
                    }
                );

                return {
                    setStripeCheckoutInfoDBResult: setStripeCheckoutInfoDBResult,
                    processSuccessfulPaymentResult: processSuccessfulPaymentResult,
                }
            }
    }