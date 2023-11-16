module.exports = function buildCreateProduct
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
                throw new Error("buildCreateProduct must have stripe")
            }
        return async function createProduct
        (
            {
                name
            }
        )
            {
                if
                (
                    !name
                )
                    {
                        throw new Error("createProduct must have name")
                    }


                const product = await stripe.products.create(
                    {
                        name: name,
                    }
                );
                
                return product;
            }
    }