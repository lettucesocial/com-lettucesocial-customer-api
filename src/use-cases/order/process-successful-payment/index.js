const buildProcessSuccessfulPayment = require('./src/process-successful-payment');

module.exports = function
(
    {
        getDayOfWeek,
        sendEmailWithTemplate,
        sendText,
        getOrderFullDetailsByOrderIdDB,
        editMessageTLGRM,
        escapedMessageForMarkdownV2Style,
        LETTUCESOCIAL_GROUP_TELEMGRA_ID
    }
)
    {

        const { notifySuccessfulDepositHoldToBusiness } = require('./src/notify-successful-deposit-hold-to-business')(
            {
                getDayOfWeek: getDayOfWeek,
                sendEmailWithTemplate:  sendEmailWithTemplate,
                sendText: sendText
            }
        );

        const { notifySuccessfulDepositHoldToTelegramGroup } = require('./src/notify-successful-deposit-hold-to-telegram-group')(
            {
                editMessageTLGRM: editMessageTLGRM,
                escapedMessageForMarkdownV2Style: escapedMessageForMarkdownV2Style,
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID,
            }
        )

        const processSuccessfulPayment = buildProcessSuccessfulPayment(
            {
                notifySuccessfulDepositHoldToBusiness: notifySuccessfulDepositHoldToBusiness,
                getOrderFullDetailsByOrderIdDB: getOrderFullDetailsByOrderIdDB,
                notifySuccessfulDepositHoldToTelegramGroup: notifySuccessfulDepositHoldToTelegramGroup
            }
        );

        const services = Object.freeze(
            {
                processSuccessfulPayment
            }
        );

        return services;
    }