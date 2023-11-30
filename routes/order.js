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

                router.post('/notifyReturnFromBank',
                    async (
                        req,
                        res
                    ) =>
                        {
                            try
                                {
                                    const notifyReturnFromStripePaymentInfo = req.body;

                                    const notifyReturnFromStripePaymentResult = await orderUsecases.notifyReturnFromStripePayment(
                                        {
                                            notifyReturnFromStripePaymentInfo:notifyReturnFromStripePaymentInfo
                                        }
                                    );

                                    const result = {
                                        result : notifyReturnFromStripePaymentResult
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

                router.get('/:orderId',
                        async (
                            req,
                            res
                        ) =>
                            {
                                try
                                    {

                                        const orderId = req.params["orderId"];

                                        const order = await orderUsecases.getOrderById(
                                            {
                                                orderId: orderId
                                            }
                                        );

                                        const result = {
                                            order : order
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

                router.post('/setBusiness',
                    async (
                        req,
                        res
                    ) =>
                        {
                            try
                                {
                                    const setOrderBusinessInfo = req.body;

                                    const setOrderBusinessResult = await orderUsecases.setOrderBusiness(
                                        {
                                            setOrderBusinessInfo: setOrderBusinessInfo
                                        }
                                    );

                                    const result = {
                                        result : setOrderBusinessResult
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


                return router;
            }
    }