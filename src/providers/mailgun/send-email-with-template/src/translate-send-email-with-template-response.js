module.exports = function buildTranslateSendEmailWithTemplateResponse
()
    {
        return async function translateSendEmailWithTemplateResponse
        (
            {
                response
            }
        )
            {
                if
                (
                    !response
                )
                    {
                        throw new Error('translateAddBusinessResponse must have response');
                    }
                else if
                (
                    !response.headers
                )
                    {
                        throw new Error('translateAddBusinessResponse response must have headers.');
                    }

                const contentType = response.headers.get('content-type');

                if
                (
                    contentType.includes('json')
                )
                    {
                        let jsonResponse;
            
                        try 
                            {
        
                                jsonResponse = await response.json();

                                return jsonResponse;
        
                            }
                        catch
                        (
                            error
                        )
                            {
                                const translateResponseERRORMESSAGE = `translateSendEmailWithTemplateResponse error|response.json()|contentType: ${contentType}`
                                throw new Error(translateResponseERRORMESSAGE);  
                            }
                    }
                else if
                (
                    contentType.includes('html')
                )
                    {
                        try
                            {
                                const textResponse = await response.text();

                                throw new Error(`translateSendEmailWithTemplateResponse Error | text response | ${textResponse}`);
                            }
                        catch
                        (
                            error
                        )
                            {
                                const translateResponseERRORMESSAGE = `translateSendEmailWithTemplateResponse error|response.text()|contentType: ${contentType}`
                                throw new Error(translateResponseERRORMESSAGE);        
                            }
                    }
                else
                    {
                        console.log(`contentType: ${contentType}`);
                        const translateResponseERRORMESSAGE = `translateSendEmailWithTemplateResponse error| unkonwn contentType |contentType: ${contentType}`
                        throw new Error(translateResponseERRORMESSAGE); 
                    }

            }
    }