module.exports = function buildCreateBusinessRouter
(
    {
        express,
        businessUsecases,
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
                throw new Error('buildCreateBusinessRouter must have express.');
            }

        if
        (
            !businessUsecases
        )
            {
                throw new Error('buildCreateBusinessRouter must have businessUsecases.');
            }

        if
        (
            !sendResult
        )
            {
                throw new Error('buildCreateBusinessRouter must have sendResult.');
            }

        if
        (
            !processError
        )
            {
                throw new Error('buildCreateBusinessRouter must have processError.');
            }

        return function createBusinessRouter
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
                                    const addBusinessInfo = req.body;

                                    const businessId = await businessUsecases.addBusiness(
                                        {
                                            addBusinessInfo:addBusinessInfo
                                        }
                                    );

                                    const result = {
                                        businessId : businessId
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

                router.post('/requestNotification',
                    async (
                        req,
                        res
                    ) =>
                        {
                            try
                                {
                                    const businessRequestNotificationInfo = req.body;

                                    const requestNotificationResult = await businessUsecases.businessRequestNotification(
                                        {
                                            businessRequestNotificationInfo: businessRequestNotificationInfo
                                        }
                                    );

                                    const result = {
                                        result : requestNotificationResult
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