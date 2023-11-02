module.exports = function buildGetDb
(
    {
        MongoClient,
        MONGODB_URI,
        DATABASE_NAME
    }
)
    {
        if
        (
            !MongoClient
        )
            {
                throw new Error('buildGetDb must have MongoClient.');
            }

        if
        (
            !MONGODB_URI
        )
            {
                throw new Error('buildGetDb must have MONGODB_URI.');
            }


        if
        (
            !DATABASE_NAME
        )
            {
                throw new Error('buildGetDb must have DATABASE_NAME.');
            }

        
        var db;
        var client;
        
        return async function getDb
        ()
            {
                if
                (
                    db
                )
                    {
                        return db;
                    }
                else if
                (
                    !db
                )
                    {
                        try 
                            {
                                client = await MongoClient.connect(
                                    MONGODB_URI
                                );

                                console.log(`Connected To ${DATABASE_NAME} DataBase`);

                                db = client.db(
                                    DATABASE_NAME
                                );

                                return db;

                            }
                        catch (error) 
                            {
                                console.log(error);
                            }
                    }

            }
    }