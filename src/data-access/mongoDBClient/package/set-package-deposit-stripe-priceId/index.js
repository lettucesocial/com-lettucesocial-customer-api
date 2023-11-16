const buildTranslateSetPackageDepositStripePriceIdResponse = require('./src/translate-set-package-deposit-stripe-priceId-response');
const buildCreateSetPackageDepositStripePriceIdOptions = require('./src/create-set-package-deposit-stripe-priceId-options');
const buildSetPackageDepositStripePriceId = require('./src/set-package-deposit-stripe-priceId');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const translateSetPackageDepositStripePriceIdResponse = buildTranslateSetPackageDepositStripePriceIdResponse();

        const createSetPackageDepositStripePriceIdOptions = buildCreateSetPackageDepositStripePriceIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setPackageDepositStripePriceId = buildSetPackageDepositStripePriceId(
            {
                getDb: getDb,
                createOptions: createSetPackageDepositStripePriceIdOptions,
                translateResponse: translateSetPackageDepositStripePriceIdResponse   
            }
        );

        const services = Object.freeze(
            {
                setPackageDepositStripePriceId
            }
        );

        return services;
    }