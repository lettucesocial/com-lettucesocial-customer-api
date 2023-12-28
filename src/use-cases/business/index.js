const buildAddBusiness= require('./add-business');
const buidlBusinessRequestNotification= require('./business-request-notification');
const buildNotifyBusinessRequestNotificationOnTlgrmGroup= require('./notify-business-request-notification-on-tlgrm-group');
const buildSendReceivedRequestNotificationEmailToBusiness = require('./send-received-request-notification-email-to-business');

module.exports = function
(
    {
        makeBusiness,
        addBusinessDB,
        getBusinessByIdDB,
        LETTUCESOCIAL_GROUP_TELEMGRA_ID,
        sendMessageTLGRM,
        escapedMessageForMarkdownV2Style,
        sendEmailWithTemplate
    }
)
    {
        const addBusiness = buildAddBusiness(
            {
                makeBusiness: makeBusiness,
                addBusinessDB: addBusinessDB
            }
        );

        const notifyBusinessRequestNotificationOnTlgrmGroup = buildNotifyBusinessRequestNotificationOnTlgrmGroup(
            {
                LETTUCESOCIAL_GROUP_TELEMGRA_ID: LETTUCESOCIAL_GROUP_TELEMGRA_ID,
                sendMessageTLGRM: sendMessageTLGRM,
                escapedMessageForMarkdownV2Style: escapedMessageForMarkdownV2Style
            }
        );

        const sendReceivedRequestNotificationEmailToBusiness = buildSendReceivedRequestNotificationEmailToBusiness
        (
            {
                sendEmailWithTemplate: sendEmailWithTemplate
            }
        );

        const businessRequestNotification = buidlBusinessRequestNotification(
            {
                getBusinessByIdDB:getBusinessByIdDB,
                notifyBusinessRequestNotificationOnTlgrmGroup:notifyBusinessRequestNotificationOnTlgrmGroup,
                sendReceivedRequestNotificationEmailToBusiness: sendReceivedRequestNotificationEmailToBusiness
            }
        );

        

        const services = Object.freeze(
            {
                addBusiness,
                businessRequestNotification
            }
        );

        return services;
    }
