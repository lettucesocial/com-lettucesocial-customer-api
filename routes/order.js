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

                

                return router;
            }
    }