module.exports = function buildTranslateEditMessageResponse
()
    {
        return function translateEditMessageResponse
        (
            response
        )
            {
                if(
                    response.ok == true &&
                    response.result
                ){
                    return response.result.message_id;    
                }
            }
    }