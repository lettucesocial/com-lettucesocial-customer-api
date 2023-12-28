const buildSendSuccessfulDepositHoldEmailToBusiness = require('./src/send-successful-deposit-hold-email-to-business');

module.exports = function
(
    {
        sendEmailWithTemplate
    }
)
    {

        const sendSuccessfulDepositHoldEmailToBusiness = buildSendSuccessfulDepositHoldEmailToBusiness(
            {
                sendEmailWithTemplate: sendEmailWithTemplate
            }
        );

        const services = Object.freeze(
            {
                sendSuccessfulDepositHoldEmailToBusiness 
            }
        );

        return services;
    }