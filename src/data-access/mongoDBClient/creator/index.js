module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {

        const { getAllCreator } = require('./get-all-creator')(
            {
                getDb: getDb
            }
        );


        

        const { getAllCreatorByZipcode } = require('./get-all-creator-by-city')(
            {
                getDb: getDb
            }
        );

        

       


        const services = Object.freeze(
            {
                getAllCreator,
                getAllCreatorByZipcode,
            }
        );

        return services;

    }