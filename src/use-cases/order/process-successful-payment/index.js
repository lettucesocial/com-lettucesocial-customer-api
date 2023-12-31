const buildProcessSuccessfulPayment = require('./src/process-successful-payment');

module.exports = function
(
    {
        getDayOfWeek,
        sendEmailWithTemplate,
        sendText
    }
)
    {

        const { notifySuccessfulDepositHoldToBusiness } = require('./src/notify-successful-deposit-hold-to-business')(
            {
                getDayOfWeek: getDayOfWeek,
                sendEmailWithTemplate:  sendEmailWithTemplate,
                sendText: sendText
            }
        )

        const processSuccessfulPayment = buildProcessSuccessfulPayment(
            {
                notifySuccessfulDepositHoldToBusiness: notifySuccessfulDepositHoldToBusiness
            }
        );

        const services = Object.freeze(
            {
                processSuccessfulPayment
            }
        );

        return services;
    }