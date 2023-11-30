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
                orderId,
                priceId,
                quantity,
                redirectUrl
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error("createPaymentLink must have orderId")
                    }

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
                        metadata: {
                            "orderId": orderId
                        },
                        phone_number_collection: {
                            enabled: true
                        },
                        custom_fields: [
                            {
                                key: 'OWNER_TITLE',
                                label: {
                                    type: 'custom',
                                    custom: 'Full name',
                                },
                                type: 'text',
                            },
                            {
                                key: 'BUSINESS_NAME',
                                label: {
                                    type: 'custom',
                                    custom: 'Business name',
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