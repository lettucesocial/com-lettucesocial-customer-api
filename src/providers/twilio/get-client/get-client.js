module.exports = function buildGetClient
(
    {
        ACCOUNT_SID,
        AUTH_TOKEN
    }
)
    {
        if
        (
            !ACCOUNT_SID
        )
            {
                throw new Error("buildGetClient must have ACCOUNT_SID")
            }

        if
        (
            !AUTH_TOKEN
        )
            {
                throw new Error("buildGetClient must have AUTH_TOKEN")
            }
            
        const client = require('twilio')(
            ACCOUNT_SID,
            AUTH_TOKEN
        );

        return async function getClient
        ()
            {
                return client;
            }
    }