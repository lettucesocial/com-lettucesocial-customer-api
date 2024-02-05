const buildGetNotifySuccessfulDepositHoldToTelegramGroupMessage = require('./src/get-notify-successful-deposit-hold-to-telegram-group-message');
const buildNotifySuccessfulDepositHoldToTelegramGroup = require('./src/notify-successful-deposit-hold-to-telegram-group');

module.exports = function
(
    {
        escapedMessageForMarkdownV2Style,
        editMessageTLGRM,
        LETTUCESOCIAL_GROUP_TELEMGRA_ID
    }
)
    {

        const getNotifySuccessfulDepositHoldToTelegramGroupMessage = buildGetNotifySuccessfulDepositHoldToTelegramGroupMessage(
            {
                escapedMessageForMarkdownV2Style: escapedMessageForMarkdownV2Style
            }
        );

        const notifySuccessfulDepositHoldToTelegramGroup = buildNotifySuccessfulDepositHoldToTelegramGroup(
            {
                editMessageTLGRM: editMessageTLGRM,
                getNotifySuccessfulDepositHoldToTelegramGroupMessage: getNotifySuccessfulDepositHoldToTelegramGroupMessage,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID,
            }
        );

        const services = Object.freeze(
            {
                notifySuccessfulDepositHoldToTelegramGroup
            }
        );

        return services;
    }