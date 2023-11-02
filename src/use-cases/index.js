module.exports = function
(
    {
        mongoDb_credentials
    }
)
    {

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

        const services = Object.freeze(
            {
                creator: creatorServices
            }
        );

        return services;
    }
