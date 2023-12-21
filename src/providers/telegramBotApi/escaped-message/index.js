const  buildEscapedMessageForMarkdownV2Style = require('./src/escaped-message');

module.exports = function()
    {
        const escapedMessageForMarkdownV2Style = buildEscapedMessageForMarkdownV2Style();
        

        const services = Object.freeze(
            {
                escapedMessageForMarkdownV2Style
            }
        );
         
        return services;
    }