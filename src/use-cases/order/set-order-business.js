module.exports = function buildSetOrderBusiness
(
    {
        setOrderBusinessDB,
        updateOrderBusinessOnTlgrmGroup,
        getOrderFullDetailsByOrderIdDB
    }
)
    {
        if
        (
            !setOrderBusinessDB
        )
            {
                throw new Error('buildSetOrderBusiness must have setOrderBusinessDB.');
            }

        if
        (
            !updateOrderBusinessOnTlgrmGroup
        )
            {
                throw new Error('buildSetOrderBusiness must have updateOrderBusinessOnTlgrmGroup.');
            }

        if
        (
            !getOrderFullDetailsByOrderIdDB
        )
            {
                throw new Error('buildSetOrderBusiness must have getOrderFullDetailsByOrderIdDB.');
            }

        return async function setOrderBusiness
        (
            {
                setOrderBusinessInfo
            }
        )
            {
                if
                (
                    !setOrderBusinessInfo
                )
                    {
                        throw new Error('setOrderBusiness must have setOrderBusinessInfo.');
                    }
                else if
                (
                    !setOrderBusinessInfo.orderId
                )
                    {
                        throw new Error('setOrderBusiness> setOrderBusinessInfo must have orderId.');
                    }
                else if
                (
                    !setOrderBusinessInfo.businessId
                )
                    {
                        throw new Error('setOrderBusiness> setOrderBusinessInfo must have businessId.');
                    }

                const orderId = setOrderBusinessInfo.orderId;
                const businessId = setOrderBusinessInfo.businessId;

                const setOrderBusinessDBResult = await setOrderBusinessDB(
                    {
                        orderId: orderId,
                        businessId: businessId
                    }
                );

                const getOrderFullDetailsByOrderIdDBResult = await getOrderFullDetailsByOrderIdDB(
                    {
                        orderId: orderId
                    }
                );

                console.log(getOrderFullDetailsByOrderIdDBResult);

                const updateOrderBusinessOnTlgrmGroupResult = await updateOrderBusinessOnTlgrmGroup(
                    {
                        telegramGroupMessageId: getOrderFullDetailsByOrderIdDBResult.telegramGroupMessageId,
                        orderId: getOrderFullDetailsByOrderIdDBResult.orderId,
                        business: getOrderFullDetailsByOrderIdDBResult.business,
                        package: getOrderFullDetailsByOrderIdDBResult.package,
                        creator:getOrderFullDetailsByOrderIdDBResult.creator
                    }
                );

                console.log(updateOrderBusinessOnTlgrmGroupResult);

                return setOrderBusinessDBResult;

            }
    }