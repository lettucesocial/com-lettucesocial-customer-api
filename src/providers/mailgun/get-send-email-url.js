module.exports = function buildGetSendEmailUrl
(
    {
        MAILGUN_API_KEY
    }
)
    {
        if
        (
            !MAILGUN_API_KEY
        )
            {
                throw new Error('buildGetSendEmailUrl must have MAILGUN_API_KEY.');
            }
            
        return function getSendEmailUrl
        (
            {
                subdomain
            }
        )
            {

                if
                (
                    !subdomain
                )
                    {
                        throw new Error('getSendEmailUrl must have subdomain.');
                    }
                    
                const url = `https://api:${MAILGUN_API_KEY}@api.mailgun.net/v3/${subdomain}.lettucesocial.com/messages`;

                return url;
            }
    }