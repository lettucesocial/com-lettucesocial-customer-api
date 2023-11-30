module.exports = function buildSetOrderTelegramGroupMessageId
(
    {
        getDb,
        createOptions,
        translateResponse
    }
)
    {
        if
        (
            !getDb
        )
            {
                throw new Error('buildSetOrderTelegramGroupMessageId must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetOrderTelegramGroupMessageId must have createOptions.');
            }
        
        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetOrderTelegramGroupMessageId must have translateResponse.');
            }

        const COLLECTION_NAME = 'orders';

        return async function setOrderTelegramGroupMessageId
        (
            {
                orderId,
                telegramGroupMessageId
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error('setOrderTelegramGroupMessageId must have orderId.');
                    }

                if
                (
                    !telegramGroupMessageId
                )
                    {
                        throw new Error('setOrderTelegramGroupMessageId must have telegramGroupMessageId.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        orderId:orderId,
                        telegramGroupMessageId: telegramGroupMessageId
                    }
                );

                const response = await collection.updateOne(
                    options.filter,
                    options.update
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;  
            }
    }