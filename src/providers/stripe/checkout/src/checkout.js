module.exports = function buildCheckout
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
                throw new Error("buildCheckout must have stripe")
            }

        return async function checkout
        (
            {
                productName,
                unitAmount,
                quantity
            }
        )
            {
                
            }
    }