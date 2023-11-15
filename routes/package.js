module.exports = function buildCreateOrderRouter
(
    {
        express,
        packageUsecases,
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
            !packageUsecases
        )
            {
                throw new Error('buildCreateOrderRouter must have packageUsecases.');
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

                router.get('/',
                    async (
                        req,
                        res
                    ) =>
                        {
                            try
                                {
                                    const packageList = await packageUsecases.getAllPackage();

                                    const result = {
                                        packageList : packageList
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

                router.get('/:packageId',
                    async (
                        req,
                        res
                    ) =>
                        {
                            try
                                {

                                    const packageId = req.params["packageId"];

                                    const package = await packageUsecases.getPackageById(
                                        {
                                            packageId: packageId
                                        }
                                    );

                                    const result = {
                                        package : package
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