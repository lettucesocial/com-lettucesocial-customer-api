module.exports =  function(
    {
        mongoDb_credentials,
    }
)
    {

        const mongoDBDataClient = require('./mongoDBClient')
        (
            {
                MONGODB_URI: mongoDb_credentials.MONGODB_URI,
                DATABASE_NAME: mongoDb_credentials.DATABASE_NAME
            }
        );

        const services = Object.freeze(
            {
                mongo: mongoDBDataClient
            }
        ); 

        return services;
    }