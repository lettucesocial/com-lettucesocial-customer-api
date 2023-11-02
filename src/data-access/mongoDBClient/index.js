const mongoDBDriver = require('mongodb');
var MongoClient = mongoDBDriver.MongoClient;
const { ObjectId } = require('mongodb');

module.exports  = function
(
    {
        MONGODB_URI,
        DATABASE_NAME
    }
)
    {

        if(
            !MONGODB_URI
        )
            {
                throw new Error("MongoDB Client must have an MONGODB_URI");
            }

        if
        (
            !DATABASE_NAME
        )
            {
                throw new Error("MongoDB Client must have an DATABASE_NAME");
            }

            const { getDb } = require('./get-db')
                (
                    {
                        MongoClient: MongoClient,
                        MONGODB_URI : MONGODB_URI,
                        DATABASE_NAME: DATABASE_NAME
                    }
                );

            
            const creatorServices = require('./creator')(
                {
                    getDb:getDb,
                    ObjectId: ObjectId
                }
            );

           

            const services = Object.freeze(
                {
                    creator: creatorServices,
                }
            );

            return services;

        
    }