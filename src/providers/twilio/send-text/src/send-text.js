module.exports = function buildSendText
(
    {
        getClient,
        TOWILIO_SMS_NUMBER
    }
)
    {
        if
        (
            !getClient
        )
            {
                throw new Error("buildSendText must have getClient")
            }

        if
        (
            !TOWILIO_SMS_NUMBER
        )
            {
                throw new Error("buildSendText must have TOWILIO_SMS_NUMBER")
            }
        return async function sendText
        (
            {
                to,
                message
            }
        )
            {
                if
                (
                    !to
                )
                    {
                        throw new Error("sendText must have to")
                    }

                if
                (
                    !message
                )
                    {
                        throw new Error("sendText must have message")
                    }

                const client = await getClient();

                await client.messages
                    .create(
                        {
                        body: message,
                        to: to,
                        from: TOWILIO_SMS_NUMBER,
                        }
                    )

                return true;

            }      
    }