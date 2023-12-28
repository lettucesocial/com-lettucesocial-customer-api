module.exports = function buidlBusinessRequestNotification
(
    {
        notifyBusinessRequestNotificationOnTlgrmGroup,
        getBusinessByIdDB,
        sendReceivedRequestNotificationEmailToBusiness
    }
)
    {
        if
        (
            !notifyBusinessRequestNotificationOnTlgrmGroup
        )
            {
                throw new Error('buidlBusinessRequestNotification must have notifyBusinessRequestNotificationOnTlgrmGroup.');
            }

        if
        (
            !getBusinessByIdDB
        )
            {
                throw new Error('buidlBusinessRequestNotification must have getBusinessByIdDB.');
            }

            

        if
        (
            !sendReceivedRequestNotificationEmailToBusiness
        )
            {
                throw new Error('buidlBusinessRequestNotification must have sendReceivedRequestNotificationEmailToBusiness.');
            }

        return async function businessRequestNotification
        (
            {
                businessRequestNotificationInfo
            }
        )
            {
                if
                (
                    !businessRequestNotificationInfo
                )
                    {
                        throw new Error('businessRequestNotification must have businessRequestNotificationInfo.');
                    }
                else if
                (
                    !businessRequestNotificationInfo.zipcode
                )
                    {
                        throw new Error('businessRequestNotification> businessRequestNotificationInfo must have zipcode.');
                    }
                else if
                (
                    !businessRequestNotificationInfo.businessId
                )
                    {
                        throw new Error('businessRequestNotification> businessRequestNotificationInfo must have businessId.');
                    }

                const businessId= businessRequestNotificationInfo.businessId;
                const zipcode = businessRequestNotificationInfo.zipcode;

                const getBusinessByIdDBResult = await getBusinessByIdDB(
                    {
                        businessId:businessId
                    }
                );

                if
                (
                    getBusinessByIdDBResult
                )
                    {
                        const notifyBusinessRequestNotificationOnTlgrmGroupResult = await notifyBusinessRequestNotificationOnTlgrmGroup(
                            {
                                zipcode: zipcode,
                                business: getBusinessByIdDBResult
                            }
                        );

                        

                        const sendReceivedRequestNotificationEmailToBusinessResult = await sendReceivedRequestNotificationEmailToBusiness(
                            {
                                ownerFirstName: getBusinessByIdDBResult.ownerTitle,
                                businessEmail: getBusinessByIdDBResult.email
                            }
                        );

                        console.log(sendReceivedRequestNotificationEmailToBusinessResult);

                        return 'done';
                    }
                else
                    {
                        throw new Error(`Business Not Found! ${businessId}`);
                    }


            }
    }