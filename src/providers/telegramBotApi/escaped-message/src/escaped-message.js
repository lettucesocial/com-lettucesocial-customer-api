module.exports = function buildEscapedMessageForMarkdownV2Style
()
    {
        const scapeCharacterList = ['_', '*', '[', ']', '(', ')', '~', '`', '>', '#', '+', '-', '=', '|', '{', '}', '.', '!'];
        const scapeChart = '\\';
        return function escapedMessageForMarkdownV2Style
        (
            {
                text
            }
        )
            {
                if
                (
                    !text
                )
                    {
                        throw new Error('escapedMessageForMarkdownV2Style must have text.');
                    }

                let result = '';

                for
                (
                    const character of text
                )
                    {
                        if
                        (
                            scapeCharacterList.includes(character)
                        )
                            {
                                result = `${result}${scapeChart}${character}`;
                            }
                        else
                            {
                                result = `${result}${character}`;
                            }
                        
                    }
                
                return result;


            }
    }