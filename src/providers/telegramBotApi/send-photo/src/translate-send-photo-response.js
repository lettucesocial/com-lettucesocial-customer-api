module.exports = function buildTranslateSendPhotoResponse
()
    {
        return function translateSendPhotoResponse
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