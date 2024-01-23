module.exports = function buildReturnFromStripePayment
(
    {
        RECIPET_BASE_URL,
        notifyRerutnFromBankOnTlgrmGroup,
        processSuccessfulPayment
    }
)
    {
        if
        (
            !RECIPET_BASE_URL
        )
            {
                throw new Error('buildReturnFromStripePayment must have RECIPET_BASE_URL.');
            }

        if
        (
            !notifyRerutnFromBankOnTlgrmGroup
        )
            {
                throw new Error('buildReturnFromStripePayment must have notifyRerutnFromBankOnTlgrmGroup.');
            }

            
        if
        (
            !processSuccessfulPayment
        )
            {
                throw new Error('buildReturnFromStripePayment must have processSuccessfulPayment.');
            }

        
        return async function returnFromStripePayment
        (
            {
                returnFromStripePaymentInfo
            }
        )
            {

                
                if
                (
                    !returnFromStripePaymentInfo
                )
                    {
                        throw new Error('returnFromStripePayment must have returnFromStripePaymentInfo.');
                    }
                else if
                (
                    !returnFromStripePaymentInfo.data
                )
                    {
                        throw new Error('returnFromStripePayment>returnFromStripePaymentInfo must have data.');
                    }
                else if
                (
                    !returnFromStripePaymentInfo.data.object
                )
                    {
                        throw new Error('returnFromStripePayment>returnFromStripePaymentInfo>data must have object.');
                    }

                switch
                (
                    returnFromStripePaymentInfo.type
                )
                    {
                        case 'payment_intent.succeeded':
                            const paymentIntent = returnFromStripePaymentInfo.data.object;
                            // Then define and call a method to handle the successful payment intent.
                            // handlePaymentIntentSucceeded(paymentIntent);
                            processSuccessfulPayment();
                            break;
                        case 'payment_method.attached':
                            const paymentMethod = returnFromStripePaymentInfo.data.object;
                            // Then define and call a method to handle the successful attachment of a PaymentMethod.
                            // handlePaymentMethodAttached(paymentMethod);
                            break;
                        // ... handle other event types
                        case 'payment_intent.created':
                            const paymentCreated = returnFromStripePaymentInfo.data.object;
                            // Then define and call a method to handle the successful attachment of a PaymentMethod.
                            // handlePaymentMethodAttached(paymentMethod);
                            break;

                        default:
                            console.log(`Unhandled event type ${returnFromStripePaymentInfo.type}`);
                    }

                    
                console.log(returnFromStripePaymentInfo);

                //notifyRerutnFromBankOnTlgrmGroup();

                // check if payment true

                const orderId = '123'

                // set order status in DB

                const redirectUrl = `${RECIPET_BASE_URL}/receipt/${orderId}`;

                return redirectUrl;
            }
    }