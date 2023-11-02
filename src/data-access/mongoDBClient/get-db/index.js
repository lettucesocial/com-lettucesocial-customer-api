const buildGetDb = require('./src/get-db');

module.exports = function(
    {
        MongoClient,
        MONGODB_URI,
        DATABASE_NAME
    }
)
    {
        const getDb = buildGetDb(
            {
                MongoClient: MongoClient,
                MONGODB_URI: MONGODB_URI,
                DATABASE_NAME: DATABASE_NAME
            }
        );

        return Object.freeze(
            {
                getDb
            }
        )
    }