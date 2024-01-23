module.exports = function buildTranslateSetStripePaymentInfoResponse
()
    {
        return function translateSetStripePaymentInfoResponse
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
                        throw new Error('translateSetStripePaymentInfoResponse must have response');
                    }

                
                return response;
                
            }
    }