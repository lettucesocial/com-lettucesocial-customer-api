module.exports = function buildGetNotifySuccessfulDepositHoldToTelegramGroupMessage
(
    {
        escapedMessageForMarkdownV2Style
    }
)
    {
        if
        (
            !escapedMessageForMarkdownV2Style
        )
            {
                throw new Error('buildGetNotifySuccessfulDepositHoldToTelegramGroupMessage must have escapedMessageForMarkdownV2Style.');
            }

        return function getNotifySuccessfulDepositHoldToTelegramGroupMessage
        (
            {
                orderId,
                ownerTitle,
                businessName,
                businessPhoneNumber,
                businessEmail,
                pakcageTitle,
                creatorFirstName,
                creatorLastName,
                creatorInstagramHandle,
                creatorEmail,
                creatorPhoneNumber
            }
        )
            {
                if
                (
                    !orderId
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have orderId.');
                    }

                if
                (
                    !ownerTitle
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have ownerTitle.');
                    }

                if
                (
                    !businessName
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have businessName.');
                    }

                if
                (
                    !businessPhoneNumber
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have businessPhoneNumber.');
                    }

                if
                (
                    !businessPhoneNumber
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have businessPhoneNumber.');
                    }

                if
                (
                    !businessEmail
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have businessEmail.');
                    }

                if
                (
                    !pakcageTitle
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have pakcageTitle.');
                    }

                if
                (
                    !creatorFirstName
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have creatorFirstName.');
                    }

                if
                (
                    !creatorLastName
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have creatorLastName.');
                    }

                if
                (
                    !creatorInstagramHandle
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have creatorInstagramHandle.');
                    }

                if
                (
                    !creatorEmail
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have creatorEmail.');
                    }

                if
                (
                    !creatorPhoneNumber
                )
                    {
                        throw new Error('getNotifySuccessfulDepositHoldToTelegramGroupMessage must have creatorPhoneNumber.');
                    }

                const escapedOwnerTitle = escapedMessageForMarkdownV2Style(
                    {
                        text: ownerTitle
                    }
                );

                const escapedBusinessName = escapedMessageForMarkdownV2Style(
                    {
                        text: businessName
                    }
                ); 


                const escapedBusinessEmail = escapedMessageForMarkdownV2Style(
                    {
                        text: businessEmail
                    }
                ); 

                const escapedCreatorFirstName = escapedMessageForMarkdownV2Style(
                    {
                        text: creatorFirstName
                    }
                ); 

                
                const escapedCreatorLastName = escapedMessageForMarkdownV2Style(
                    {
                        text: creatorLastName
                    }
                ); 

                const escapedCreatorInstagramHandle = escapedMessageForMarkdownV2Style(
                    {
                        text: creatorInstagramHandle
                    }
                ); 

                const message = `
                OrderId: ${orderId}
                🤑 Payment
                    ✅ Successfull 
                🏬 Business 
                    Owner Title: ${escapedOwnerTitle}
                    Name: ${escapedBusinessName}
                    Phone Number: ${businessPhoneNumber}
                    Email: ${escapedBusinessEmail}
                🛍 Package
                    Title: ${pakcageTitle}
                💁 Creator
                    First Name: ${escapedCreatorFirstName}
                    Last Name: ${escapedCreatorLastName}
                    Instagram Handle: ${escapedCreatorInstagramHandle}
                    Email: ${creatorEmail}
                    PhoneNumber: ${creatorPhoneNumber}
                `;

                return message;
            }
    }