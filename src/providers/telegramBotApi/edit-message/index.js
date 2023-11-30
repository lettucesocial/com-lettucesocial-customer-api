const buildTranslateEditMessageResponse = require('./src/translate-edit-message-response');
const buildCreateEditMessageRequest = require('./src/create-edit-message-request');
const buildEditMessage = require('./src/edit-message');

module.exports = function(
    {
        BOT_TOKEN,
        fetch,
        generateInlineKeyboardMarkup
    }
)
    {
        const translateEditMessageResponse = buildTranslateEditMessageResponse();
        
        const createEditMessageRequest = buildCreateEditMessageRequest(
            {
                generateInlineKeyboardMarkup: generateInlineKeyboardMarkup
            }
            
        );

        const editMessage = buildEditMessage(
            {
                BOT_TOKEN: BOT_TOKEN,
                fetch: fetch,
                createRequest: createEditMessageRequest,
                translateResponse: translateEditMessageResponse
            }
        );

        const services = Object.freeze(
            {
                editMessage
            }
        );

        return services;
    }