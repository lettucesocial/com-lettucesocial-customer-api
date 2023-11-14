module.exports = function
(
    {
        mongoDb_credentials
    }
)
    {

        const models = require('../model')();

        const dataAccess = require('../data-access')(
            {
                mongoDb_credentials: mongoDb_credentials
            }
        );
        
        const creatorServices = require('./creator')(
            {
                getAllCreatorDB: dataAccess.mongo.creator.getAllCreator,
                getAllCreatorByZipcodeDB: dataAccess.mongo.creator.getAllCreatorByZipcode,
            }
        );

        const businessServices = require('./business')(
            {
                makeBusiness: models.makeBusiness,
                addBusinessDB: dataAccess.mongo.business.addBusiness
            }
        );

        const orderServices = require('./order')(
            {
                makeOrder: models.makeOrder,
                createOrderDB: dataAccess.mongo.order.addOrder
            }
        )

        const services = Object.freeze(
            {
                creator: creatorServices,
                business: businessServices,
                order: orderServices
            }
        );

        return services;
    }
