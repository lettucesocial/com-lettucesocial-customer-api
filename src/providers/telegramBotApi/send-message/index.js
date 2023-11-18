const buildTranslateSendMessageResponse = require('./src/translate-send-message-response');
const buildCreateSendMessageRequest = require('./src/create-send-message-request');
const buildSendMessage = require('./src/send-message');

module.exports = function
(
    {
        BOT_TOKEN,
        fetch,
        generateInlineKeyboardMarkup
    }
)
    {
        const translateSendMessageResponse = buildTranslateSendMessageResponse();

        const createSendMessageRequest = buildCreateSendMessageRequest(
            {
                generateInlineKeyboardMarkup: generateInlineKeyboardMarkup
            }
        );
        const sendMessage = buildSendMessage(
            {
                BOT_TOKEN: BOT_TOKEN,
                createRequest: createSendMessageRequest,
                fetch: fetch,
                translateResponse: translateSendMessageResponse
            }
        );

        const services = Object.freeze(
            {
                sendMessage
            }
        );

        return services;
    }