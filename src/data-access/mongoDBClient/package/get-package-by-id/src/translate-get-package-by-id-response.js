module.exports = function buildTranslateGetPackageByIdResponse
()
    {
        return function buildTranslateGetPackageByIdResponse
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
                        throw new Error('buildTranslateGetPackageByIdResponse must have response.');
                    }
                return response;
            }
    }