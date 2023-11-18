module.exports = function buildCreateOrderRouter
(
    {
        express,
        orderUsecases,
        sendResult,
        processError
    }
)
    {
        if
        (
            !express
        )
            {
                throw new Error('buildCreateOrderRouter must have express.');
            }

        if
        (
            !orderUsecases
        )
            {
                throw new Error('buildCreateOrderRouter must have orderUsecases.');
            }

        if
        (
            !sendResult
        )
            {
                throw new Error('buildCreateOrderRouter must have sendResult.');
            }

        if
        (
            !processError
        )
            {
                throw new Error('buildCreateOrderRouter must have processError.');
            }
        return function createOrderRouter
        ()
            {
                let router = express.Router();

                router.post('/',
                    async (
                        req,
                        res
                    ) =>
                        {
                            try
                                {
                                    const createOrderInfo = req.body;

                                    const createOrderResult = await orderUsecases.createOrder(
                                        {
                                            createOrderInfo:createOrderInfo
                                        }
                                    );

                                    const result = {
                                        paymentUrl : createOrderResult
                                    };

                                    sendResult(
                                        res,
                                        result
                                    );
                                }
                            catch
                            (
                                error
                            )
                                {
                                    processError(
                                        res,
                                        error
                                    )
                                }
                        }
                );

                router.post('/returnFromBank/stripe',
                async (
                    req,
                    res
                ) =>
                    {
                        try
                            {
                                const returnFromStripePaymentInfo = req.body;

                                // Return a response to acknowledge receipt of the event
                                const result = {
                                    received: true
                                };

                                sendResult(
                                    res,
                                    result
                                );

                                try
                                    {
                                        const createOrderResult = await orderUsecases.returnFromStripePayment(
                                            {
                                                returnFromStripePaymentInfo:returnFromStripePaymentInfo
                                            }
                                        );
                                    }
                                catch
                                (
                                    error
                                )
                                    {
                                        console.log(error);
                                    }
                                
                            }
                        catch
                        (
                            error
                        )
                            {
                                processError(
                                    res,
                                    error
                                )
                            }
                    }
            );


                return router;
            }
    }