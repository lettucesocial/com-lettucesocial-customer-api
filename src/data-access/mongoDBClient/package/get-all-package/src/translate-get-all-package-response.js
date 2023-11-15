module.exports = function buildTranslateGetAllPackageResponse
()
    {
        return function translateGetAllPackageResponse
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
                        throw new Error('translateGetAllPackageResponse must have response');
                    }

                return response.toArray();   
            }
    }