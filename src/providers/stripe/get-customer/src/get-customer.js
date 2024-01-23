module.exports = function buildGetCustomer
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
                throw new Error("buildGetCustomer must have stripe")
            }

        return async function getCustomer
        (
            {
                customerId
            }
        )
            {
                if
                (
                    !customerId
                )
                    {
                        throw new Error("getCustomer must have customerId")
                    }
                    
                const customer = await stripe.customers.retrieve(customerId);

                return customer;
            }
    }