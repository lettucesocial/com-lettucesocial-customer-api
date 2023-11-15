const buildCreateBusinessRouter = require('./business');
const buildCreateCreatorRouter = require('./creator');
const buildCreateOrderRouter = require('./order');
const buildCreatePackageRouter= require('./package');

module.exports = function
(
    {
        express,
        customerServices,
        sendResult,
        processError,
    }
)
    {

        const createBusinessRouter = buildCreateBusinessRouter(
            {
                businessUsecases:customerServices.business,
                express:express,
                processError:processError,
                sendResult:sendResult
            }
        );

        const createCreatorRouter = buildCreateCreatorRouter(
            {
                creatorUsecases:customerServices.creator,
                express:express,
                processError:processError,
                sendResult:sendResult
            }
        );

        const createOrderRouter = buildCreateOrderRouter(
            {
                orderUsecases:customerServices.order,
                express:express,
                processError:processError,
                sendResult:sendResult
            }
        );

        const createPackageRouter = buildCreatePackageRouter(
            {
                packageUsecases:customerServices.package,
                express:express,
                processError:processError,
                sendResult:sendResult
            }
        );
        
        const services = Object.freeze(
            {
                business:createBusinessRouter,
                creator: createCreatorRouter,
                order: createOrderRouter,
                package: createPackageRouter
            }
        );

        return services;
    }