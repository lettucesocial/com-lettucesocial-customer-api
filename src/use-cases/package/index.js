const buildGetAllPackage= require('./get-all-package');
const buildGetPackageById = require('./get-package-by-id');
const buildCreatePackageDepositStripePriceId = require('./create-package-deposit-stripe-priceId');

module.exports= function
(
    {
        getAllPackageDB,
        getPackageByIdDB,
        createPriceStripe,
        createProductStripe,
        setPackageDepositStripePriceIdDB
    }
)
    {

        const getAllPackage = buildGetAllPackage(
            {
                getAllPackageDB: getAllPackageDB
            }
        );

        const getPackageById = buildGetPackageById(
            {
                getPackageByIdDB: getPackageByIdDB
            }
        );

        const createPackageDepositStripePriceId = buildCreatePackageDepositStripePriceId(
            {
                createPriceStripe: createPriceStripe,
                createProductStripe: createProductStripe,
                setPackageDepositStripePriceIdDB: setPackageDepositStripePriceIdDB
            }
        );

        const services = Object.freeze(
            {
                getAllPackage,
                getPackageById,
                createPackageDepositStripePriceId
            }
        );

        return services;
    }