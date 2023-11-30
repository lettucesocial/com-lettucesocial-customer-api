module.exports = function buidlBusinessRequestNotification
(
    {
        notifyBusinessRequestNotificationOnTlgrmGroup,
        getBusinessByIdDB
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

                        console.log(notifyBusinessRequestNotificationOnTlgrmGroupResult);

                        return 'done';
                    }
                else
                    {
                        throw new Error(`Business Not Found! ${businessId}`);
                    }


            }
    }