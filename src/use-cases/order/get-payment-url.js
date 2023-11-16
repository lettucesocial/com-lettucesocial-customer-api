module.exports = function buildGetPaymentUrl
(
    {
        getPackageById,
        createPaymentLinkStripe,
        createPackageDepositStripePriceId
    }
)
    {
        if
        (
            !getPackageById
        )
            {
                throw new Error('buildGetPaymentUrl must have getPackageById.');
            }

        if
        (
            !createPaymentLinkStripe
        )
            {
                throw new Error('buildGetPaymentUrl must have createPaymentLinkStripe.');
            }

        if
        (
            !createPackageDepositStripePriceId
        )
            {
                throw new Error('buildGetPaymentUrl must have createPackageDepositStripePriceId.');
            }
            
        return async function getPaymentUrl
        (
            {
                packageId
            }
        )
            {
                const foundPackage = await getPackageById(
                    {
                        packageId: packageId
                    }
                );

                if
                (
                    foundPackage
                )
                    {
                        let packageDepositPriceId;

                        if
                        (
                            !foundPackage.depositStripePriceId
                        )
                            {
                                const createdStripePriceId = await createPackageDepositStripePriceId(
                                    {
                                        package: foundPackage
                                    }
                                );

                                packageDepositPriceId = createdStripePriceId;
                            }
                        else
                            {
                                packageDepositPriceId = foundPackage.depositStripePriceId;
                            }

                        const createPaymentLinkStripeResult = await createPaymentLinkStripe(
                            {
                                priceId: packageDepositPriceId,
                                quantity: 1
                            }
                        );

                        // store payment in db

                        console.log(createPaymentLinkStripeResult);

                        return createPaymentLinkStripeResult.url;
      
                    }
                else
                    {
                        throw new Error(`No Package Found with ID: ${packageId}`)
                    }
            }
    }