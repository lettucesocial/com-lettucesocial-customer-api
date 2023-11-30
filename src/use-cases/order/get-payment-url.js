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
                packageId,
                redirectUrl,
                orderId
            }
        )
            {

                if
                (
                    !packageId
                )
                    {
                        throw new Error('getPaymentUrl must have packageId.');
                    }

                if
                (
                    !redirectUrl
                )
                    {
                        throw new Error('getPaymentUrl must have redirectUrl.');
                    }

                if
                (
                    !orderId
                )
                    {
                        throw new Error('getPaymentUrl must have orderId.');
                    }
                    
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
                                orderId: orderId,
                                priceId: packageDepositPriceId,
                                quantity: 1,
                                redirectUrl: redirectUrl
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