const buildSendSuccessfulDepositHoldSMSToBusiness = require('./src/send-successful-deposit-hold-sms-to-business');
const buildGetSendSuccessfulDepositHoldSMSToBusinessContent = require('./src/get-send-successful-deposit-hold-sms-to-business-content');

module.exports = function
(
    {
        getDayOfWeek,
        sendText
    }
)
    {

        const getSendSuccessfulDepositHoldSMSToBusinessContent = buildGetSendSuccessfulDepositHoldSMSToBusinessContent(
            {
                getDayOfWeek: getDayOfWeek
            }
        );

        const sendSuccessfulDepositHoldSMSToBusiness = buildSendSuccessfulDepositHoldSMSToBusiness(
            {
                getSendSuccessfulDepositHoldSMSToBusinessContent: getSendSuccessfulDepositHoldSMSToBusinessContent,
                sendText: sendText
            }
        );

        const services = Object.freeze(
            {
                sendSuccessfulDepositHoldSMSToBusiness 
            }
        );

        return services;
    }