module.exports = function buildTransalteSetStripeCheckoutInfoResponse
()
    {
        return function transalteSetStripeCheckoutInfoResponse
        (
            {
                response
            }
        )
            {
                if
                (
                    !response
                )
                    {
                        throw new Error('transalteSetStripeCheckoutInfoResponse must have response');
                    }

                
                return response;
                
            }
    }