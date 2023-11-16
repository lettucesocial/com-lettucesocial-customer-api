module.exports = function buildCreatePrice
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
                throw new Error("buildCreatePrice must have stripe")
            }
        return async function createPrice
        (
            {
                productId,
                unitAmount
            }
        )
            {
                if
                (
                    !productId
                )
                    {
                        throw new Error("createPrice must have productId")
                    }

                if
                (
                    !unitAmount
                )
                    {
                        throw new Error("createPrice must have unitAmount")
                    }


                const price = await stripe.prices.create(
                    {
                        currency: 'usd',
                        unit_amount: unitAmount,
                        product: productId,
                    }
                );
                
                return price;
            }
    }