module.exports = function buildCreatePaymentLink
(
    {
        stripe
    }
)
    {
        if
        (
            !stripe
        )
            {
                throw new Error("buildCreatePaymentLink must have stripe")
            }
        return async function createPaymentLink
        (
            {
                priceId,
                quantity
            }
        )
            {
                if
                (
                    !priceId
                )
                    {
                        throw new Error("createPaymentLink must have priceId")
                    }

                if
                (
                    !quantity
                )
                    {
                        throw new Error("createPaymentLink must have quantity")
                    }

                const paymentLink = await stripe.paymentLinks.create(
                    {
                        line_items: [
                            {
                                price: priceId,
                                quantity: quantity,
                            },
                        ],
                    }
                );
                
                return paymentLink;
            }
    }