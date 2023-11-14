module.exports = function buildMakeOrder
(
    {
        ObjectId
    }
)
    {
        if 
        (
            !ObjectId
        )
            {
                throw new Error('buildMakeOrder must have ObjectId')
            }
        return function makeOrder
        (
            {
                creatorId,
                packageId,

            }
        )
            {
                let creatorMongoId;

                if
                (
                    !creatorId
                )
                    {
                        throw new Error("makeOrder must have creatorId")
                    }
                else
                    {
                        try
                            {
                                creatorMongoId = new ObjectId(
                                    creatorId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('creatorId info is invalid')
                            }
                    }

                let packageMongoId;

                if
                (
                    !packageId
                )
                    {
                        throw new Error("makeOrder must have packageId")
                    }
                else
                    {
                        try
                            {
                                packageMongoId = new ObjectId(
                                    packageId
                                );
    
                            }
                        catch (error) 
                            {
                                throw new Error('packageId info is invalid')
                            }
                    }

                return Object.freeze(
                    {
                        getPackageId:() => packageId,
                        getCreatorId: () => creatorId,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            package: packageMongoId,
                            creator: creatorId,
                        }
                    }

            }
    }