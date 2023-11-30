module.exports = function buildCreateSetOrderTelegramGroupMessageIdOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateSetOrderTelegramGroupMessageIdOptions must have ObjectId.');
            }

        return function createSetOrderTelegramGroupMessageIdOptions
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
                        throw new Error('createSetOrderTelegramGroupMessageIdOptions must have orderId.');
                    }

                if
                (
                    !telegramGroupMessageId
                )
                    {
                        throw new Error('createSetOrderTelegramGroupMessageIdOptions must have telegramGroupMessageId.');
                    }

                const orderObjectId = new ObjectId(
                    orderId
                );


                const filter = {
                    "_id": orderObjectId
                };

                const update = {
                    "$set": {
                        telegramGroupMessageId: telegramGroupMessageId
                    }
                };

                const options = {
                    filter: filter,
                    update : update
                };

                return options;
                
            }
    }