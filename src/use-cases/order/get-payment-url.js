module.exports = function buildGetPaymentUrl
(
    {
        getPackageById,
        createPaymentLinkStripe,
        createPackageDepositStripePriceId,
        setStripePaymentInfoDB
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

        if
        (
            !setStripePaymentInfoDB
        )
            {
                throw new Error('buildGetPaymentUrl must have setStripePaymentInfoDB.');
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

                        const setStripePaymentInfoDBResult = await setStripePaymentInfoDB(
                            {
                                orderId: orderId,
                                stripePaymentInfo: createPaymentLinkStripeResult
                            }
                        )

                        return createPaymentLinkStripeResult.url;
      
                    }
                else
                    {
                        throw new Error(`No Package Found with ID: ${packageId}`)
                    }
            }
    }