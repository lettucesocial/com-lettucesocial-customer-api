module.exports = function buildProcessStipeWebhookRequest
(
    {
        processStripeTypeCheckoutSessionCompleted
    }
)
    {

        if
        (
            !processStripeTypeCheckoutSessionCompleted
        )
            {
                throw new Error('buildProcessStipeWebhookRequest must have processStripeTypeCheckoutSessionCompleted.');
            }

            

        return async function processStipeWebhookRequest
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
                        throw new Error('processStipeWebhookRequest must have stipeWebhookRequest.');
                    }
                else if
                (
                    !stipeWebhookRequest.data
                )
                    {
                        throw new Error('processStipeWebhookRequest>stipeWebhookRequest must have data.');
                    }
                else if
                (
                    !stipeWebhookRequest.data.object
                )
                    {
                        throw new Error('processStipeWebhookRequest>stipeWebhookRequest>data must have object.');
                    }


                switch
                (
                    stipeWebhookRequest.type
                )
                    {
                        case 'checkout.session.completed':
                            const processStripeTypeCheckoutSessionCompletedResult = await processStripeTypeCheckoutSessionCompleted(
                                {
                                    stipeWebhookRequest: stipeWebhookRequest
                                }
                            );

                            break;

                        default:
                            console.log(`Unhandled event type ${stipeWebhookRequest.type}`);
                    }
            }
    }