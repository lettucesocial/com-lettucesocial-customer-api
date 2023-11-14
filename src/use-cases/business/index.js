const buildAddBusiness= require('./add-business');

module.exports = function
(
    {
        makeBusiness,
        addBusinessDB
    }
)
    {
        const addBusiness = buildAddBusiness(
            {
                makeBusiness: makeBusiness,
                addBusinessDB: addBusinessDB
            }
        );

        const services = Object.freeze(
            {
                addBusiness
            }
        );

        return services;
    }
