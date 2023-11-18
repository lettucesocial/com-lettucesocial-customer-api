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
                quantity,
                redirectUrl
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

                if
                (
                    !redirectUrl
                )
                    {
                        throw new Error("createPaymentLink must have redirectUrl")
                    }

                const paymentLink = await stripe.paymentLinks.create(
                    {
                        line_items: [
                            {
                                price: priceId,
                                quantity: quantity,
                            },
                        ],
                        after_completion: {
                            type: 'redirect',
                            redirect: 
                                {
                                    url: redirectUrl,
                                },
                        },
                        custom_fields: [
                            {
                                key: 'OWNER_TITLE',
                                label: {
                                    type: 'custom',
                                    custom: 'NAME',
                                },
                                type: 'text',
                            },
                            {
                                key: 'OWNER_MOBILE',
                                label: {
                                    type: 'custom',
                                    custom: 'BUSINESS NAME',
                                },
                                type: 'text',
                            },
                            // {
                            //     key: 'BUSINESS_NAME',
                            //     label: {
                            //         type: 'custom',
                            //         custom: 'BUSINESS NAME',
                            //     },
                            //     type: 'text',
                            // },
                        ],
                    }
                );
                
                return paymentLink;
            }
    }