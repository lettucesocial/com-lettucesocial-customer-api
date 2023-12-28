module.exports = function buildGetSendSuccessfulDepositHoldSMSToBusinessContent
(
    {
        getDayOfWeek
    }
)
    {
        if
        (
            !getDayOfWeek
        )
            {
                throw new Error('buildGetSendSuccessfulDepositHoldSMSToBusinessContent must have getDayOfWeek.');
            }

        return function getSendSuccessfulDepositHoldSMSToBusinessContent
        (
            {
                ownerFirstName,
                businessName,
                businessEmail
            }
        )
            {
                if
                (
                    !ownerFirstName
                )
                    {
                        throw new Error('getSendSuccessfulDepositHoldSMSToBusinessContent must have ownerFirstName.');
                    }

                if
                (
                    !businessName
                )
                    {
                        throw new Error('getSendSuccessfulDepositHoldSMSToBusinessContent must have businessName.');
                    }

                if
                (
                    !businessEmail
                )
                    {
                        throw new Error('getSendSuccessfulDepositHoldSMSToBusinessContent must have businessEmail.');
                    }
                    
                const todaysDay = getDayOfWeek();

                const message = `Hi ${ownerFirstName},\n\nHappy ${todaysDay}! LettuceSocial team here!\n\nWe are super excited about our collaboration and looking forward to helping you grow ${businessName} through local social media advocacy by LettuceSocial nano-influencers.\n\nWe just sent you an email to ${businessEmail} with more details; please review and reach out if you have any questions. 😊`;

                return message;
            }
    }