module.exports = function buildCreateCreatorRouter
(
    {
        express,
        creatorUsecases,
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
                throw new Error('buildCreateCreatorRouter must have express.');
            }

        if
        (
            !creatorUsecases
        )
            {
                throw new Error('buildCreateCreatorRouter must have creatorUsecases.');
            }

        if
        (
            !sendResult
        )
            {
                throw new Error('buildCreateCreatorRouter must have sendResult.');
            }

        if
        (
            !processError
        )
            {
                throw new Error('buildCreateCreatorRouter must have processError.');
            }

        return function createCreatorRouter
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
                                    const creatorList = await creatorUsecases.getAllCreatorList();

                                    const result = {
                                        creatorList : creatorList
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

                router.get('/byZipCode/:zipCode',
                    async (
                        req,
                        res
                    ) =>
                        {
                            try
                                {

                                    const zipCode = parseInt(req.params['zipCode'])
                                    const creatorList = await creatorUsecases.searchCreatorByZipcode(
                                        {
                                            zipcode:zipCode
                                        }
                                    );

                                    const result = {
                                        creatorList : creatorList
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