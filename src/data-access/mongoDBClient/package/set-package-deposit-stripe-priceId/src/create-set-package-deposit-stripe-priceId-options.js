module.exports = function buildCreateSetPackageDepositStripePriceIdOptions
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
                throw new Error('buildCreateSetPackageDepositStripePriceIdOptions must have ObjectId.');
            }

        return function createSetPackageDepositStripePriceIdOptions
        (
            {
                packageId,
                depositStripePriceId
            }
        )
            {
                if
                (
                    !packageId
                )
                    {
                        throw new Error('createSetPackageDepositStripePriceIdOptions must have packageId.');
                    }

                if
                (
                    !depositStripePriceId
                )
                    {
                        throw new Error('createSetPackageDepositStripePriceIdOptions must have depositStripePriceId.');
                    }

                const id = new ObjectId(
                    packageId
                );

                const filter = {
                    "_id": id
                };

                const update = {
                    "$set": {
                        depositStripePriceId: depositStripePriceId
                    }
                };

                const options = {
                    filter: filter,
                    update : update
                };

                return options;
            }
    }