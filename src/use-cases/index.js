module.exports = function
(
    {
        mongoDb_credentials,
        MAILGUN_SEND_EMAIL_URL,
        TWILIO_CREDENTIALS,
        TOWILIO_SMS_NUMBER,
        STRIPE_SECRET_KEY,
        RECIPET_BASE_URL,
        BOT_TOKEN,
        LETTUCESOCIAL_GROUP_TELEMGRA_ID
    }
)
    {

        const models = require('../model')();

        const dataAccess = require('../data-access')(
            {
                mongoDb_credentials: mongoDb_credentials
            }
        );

        const providers = require('../providers')(
            {
                MAILGUN_SEND_EMAIL_URL: MAILGUN_SEND_EMAIL_URL,
                TOWILIO_SMS_NUMBER: TOWILIO_SMS_NUMBER,
                STRIPE_SECRET_KEY: STRIPE_SECRET_KEY,
                TWILIO_CREDENTIALS: TWILIO_CREDENTIALS,
                BOT_TOKEN: BOT_TOKEN
            }
        );
        
        const creatorServices = require('./creator')(
            {
                getAllCreatorDB: dataAccess.mongo.creator.getAllCreator,
                getAllCreatorByZipcodeDB: dataAccess.mongo.creator.getAllCreatorByZipcode,
                getCreatorByIdDB: dataAccess.mongo.creator.getCreatorById
            }
        );

        const businessServices = require('./business')(
            {
                makeBusiness: models.makeBusiness,
                addBusinessDB: dataAccess.mongo.business.addBusiness
            }
        );

        

        const packageServices = require('./package')(
            {
                getAllPackageDB: dataAccess.mongo.package.getAllPackage,
                getPackageByIdDB: dataAccess.mongo.package.getPackageById,
                createPriceStripe: providers.stripe.createPrice,
                createProductStripe: providers.stripe.createProduct,
                setPackageDepositStripePriceIdDB: dataAccess.mongo.package.setPackageDepositStripePriceId
            }
        );

        const orderServices = require('./order')(
            {
                makeOrder: models.makeOrder,
                createOrderDB: dataAccess.mongo.order.addOrder,
                createPackageDepositStripePriceId: packageServices.createPackageDepositStripePriceId,
                createPaymentLinkStripe: providers.stripe.createPaymentLink,
                getPackageById: packageServices.getPackageById,
                RECIPET_BASE_URL : RECIPET_BASE_URL,
                sendMessageTLGRM: providers.tlgrmBot.sendMessage,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID
            }
        );

        const services = Object.freeze(
            {
                creator: creatorServices,
                business: businessServices,
                order: orderServices,
                package: packageServices
            }
        );

        return services;
    }
