const buildTranslateEditMessageResponse = require('./src/translate-edit-message-response');
const buildCreateEditMessageRequest = require('./src/create-edit-message-request');
const buildEditMessage = require('./src/edit-message');

module.exports = function(
    BOT_TOKEN,
    proxyAgent,
    fetch,
    generateInlineKeyboardMarkup
)
    {
        const translateEditMessageResponse = buildTranslateEditMessageResponse();
        
        const createEditMessageRequest = buildCreateEditMessageRequest(
            proxyAgent,
            generateInlineKeyboardMarkup
        );

        const editMessage = buildEditMessage(
            BOT_TOKEN,
            fetch,
            createEditMessageRequest,
            translateEditMessageResponse
        );

        const services = Object.freeze(
            {
                editMessage
            }
        );

        return services;
    }