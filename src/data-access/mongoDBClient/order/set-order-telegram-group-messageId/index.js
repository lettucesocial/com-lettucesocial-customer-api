const buildTranslateSetOrderTelegramGroupMessageIdResponse = require('./src/translate-set-order-telegram-group-messageId-response');
const buildCreateSetOrderTelegramGroupMessageIdOptions = require('./src/create-set-order-telegram-group-messageId-options');
const buildSetOrderTelegramGroupMessageId = require('./src/set-order-telegram-group-messageId');

module.exports = function
(
    {
        ObjectId,
        getDb
    }
)
    {
        
        const translateSetOrderTelegramGroupMessageIdResponse = buildTranslateSetOrderTelegramGroupMessageIdResponse();

        const createSetOrderTelegramGroupMessageIdOptions = buildCreateSetOrderTelegramGroupMessageIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setOrderTelegramGroupMessageId = buildSetOrderTelegramGroupMessageId(
            {
                getDb: getDb,
                createOptions: createSetOrderTelegramGroupMessageIdOptions,
                translateResponse: translateSetOrderTelegramGroupMessageIdResponse
            }
        );

        const services = Object.freeze(
            {
                setOrderTelegramGroupMessageId
            }
        );

        return services;
    }