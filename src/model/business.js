module.exports = function buildMakeBusiness
()
    {
        return function makeBusiness
        (
            {
                ownerTitle,
                email,
                mobile,
                businessName,
            }
        )
            {
                if
                (
                    !ownerTitle
                )
                    {
                        throw new Error("makeBusiness must have ownerTitle")
                    }

                if
                (
                    !email
                )
                    {
                        throw new Error("makeBusiness must have email")
                    }

                if
                (
                    !mobile
                )
                    {
                        throw new Error("makeBusiness must have mobile")
                    }

                if
                (
                    !businessName
                )
                    {
                        throw new Error("makeBusiness must have businessName")
                    }

                return Object.freeze(
                    {
                        getOwnerTitle:() => ownerTitle,
                        getEmail: () => email,
                        getMobile: () => mobile,
                        getBusinessName: () => businessName,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            ownerTitle: ownerTitle,
                            email: email,
                            mobile: mobile,
                            businessName: businessName
                        }
                    }
            }        
    }