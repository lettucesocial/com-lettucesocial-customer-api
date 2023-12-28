const buildNotifySuccessfulDepositHoldToBusiness = require('./src/notify-successful-deposit-hold-to-business');


module.exports = function
(
    {
        sendEmailWithTemplate,
        sendText,
        getDayOfWeek
    }
)
    {
        const { sendSuccessfulDepositHoldEmailToBusiness } = require('./src/send-successful-deposit-hold-email-to-business')(
            {
                sendEmailWithTemplate: sendEmailWithTemplate
            }
        );

        const { sendSuccessfulDepositHoldSMSToBusiness } = require('./src/send-successful-deposit-hold-sms-to-business')(
            {
                getDayOfWeek: getDayOfWeek,
                sendText: sendText 
            }
        )

        const notifySuccessfulDepositHoldToBusiness = buildNotifySuccessfulDepositHoldToBusiness(
            {
                sendSuccessfulDepositHoldEmailToBusiness: sendSuccessfulDepositHoldEmailToBusiness,
                sendSuccessfulDepositHoldSMSToBusiness: sendSuccessfulDepositHoldSMSToBusiness
            }
        );

        const services = Object.freeze(
            {
                notifySuccessfulDepositHoldToBusiness
            }
        );

        return services;
    }