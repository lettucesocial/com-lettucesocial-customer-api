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


        

        const { getAllCreatorByZipcode } = require('./get-all-creator-by-zipcode')(
            {
                getDb: getDb
            }
        );

        

        const { getCreatorById } = require('./get-creator-by-id')(
            {
                getDb: getDb,
                ObjectId:ObjectId 
            }
        );

        

       


        const services = Object.freeze(
            {
                getAllCreator,
                getAllCreatorByZipcode,
                getCreatorById
            }
        );

        return services;

    }