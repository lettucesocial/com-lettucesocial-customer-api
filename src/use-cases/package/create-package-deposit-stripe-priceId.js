module.exports = function buildCreatePackageDepositStripePriceId
(
    {
        createProductStripe,
        createPriceStripe,
        setPackageDepositStripePriceIdDB
    }
)
    {
        if
        (
            !createProductStripe
        )
            {
                throw new Error('buildCreatePackageDepositStripePriceId must have createProductStripe.');
            }

        if
        (
            !createPriceStripe
        )
            {
                throw new Error('buildCreatePackageDepositStripePriceId must have createPriceStripe.');
            }

        if
        (
            !setPackageDepositStripePriceIdDB
        )
            {
                throw new Error('buildCreatePackageDepositStripePriceId must have setPackageDepositStripePriceIdDB.');
            }
            

        return async function createPackageDepositStripePriceId
        (
            {
                package
            }
        )
            {
                if
                (
                    !package
                )
                    {
                        throw new Error('createPackageDepositStripePriceId must have package.');
                    }
                else if
                (
                    !package.title
                )
                    {
                        throw new Error('createPackageDepositStripePriceId package must have title.');
                    }
                else if
                (
                    !package.deposit
                )
                    {
                        throw new Error('createPackageDepositStripePriceId package must have deposit.');
                    }

                const createProductStripeResult = await createProductStripe(
                    {
                        name: package.title
                    }
                );

                const productId = createProductStripeResult.id;

                const packageDeposit100 = package.deposit * 100;
                console.log(`packageDeposit100 : ${packageDeposit100}`);

                const createPriceStripeResult = await createPriceStripe(
                    {
                        productId: productId,
                        unitAmount: packageDeposit100
                    }
                );

                const stripePriceId = createPriceStripeResult.id;

                const setPackageDepositStripePriceIdDBResult = await setPackageDepositStripePriceIdDB(
                    {
                        packageId: package._id,
                        depositStripePriceId: stripePriceId
                    }
                )

                return stripePriceId;


            }
    }