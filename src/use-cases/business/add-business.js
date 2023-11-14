module.exports= function buildAddBusiness
(
    {
        makeBusiness,
        addBusinessDB
    }
)
    {
        if
        (
            !makeBusiness
        )
            {
                throw new Error('buildAddBusiness must have makeBusiness.');
            }

        if
        (
            !addBusinessDB
        )
            {
                throw new Error('buildAddBusiness must have addBusinessDB.');
            }

        return async function addBusiness
        (
            {
                addBusinessInfo
            }
        )
            {

                const business = makeBusiness(
                    addBusinessInfo
                );

                const addBusinessDBResulet = await addBusinessDB(
                    {
                        business:business
                    }
                );

                return addBusinessDBResulet;

            }
    }