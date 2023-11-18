module.exports = function(
    {
        BOT_TOKEN,
        fetch
    }
)
    {

        const { generateInlineKeyboardMarkup } = require('./generate-inline-keyboard');

        const { sendMessage }  = require('./send-message')(
            {
                BOT_TOKEN:BOT_TOKEN,
                fetch: fetch,
                generateInlineKeyboardMarkup:generateInlineKeyboardMarkup,
            }
        );

        // const { editMessage } = require('./edit-message')(
        //     BOT_TOKEN,
        //     proxyAgent,
        //     fetch,
        //     generateInlineKeyboardMarkup
        // )

        
        // const { sendPhoto }  = require('./send-photo')(
        //     BOT_TOKEN,
        //     proxyAgent,
        //     fetch 
        // );

        

        const services = Object.freeze(
            {
                sendMessage,
                // sendPhoto,
                // editMessage
            }
        );

        return services;

    }

