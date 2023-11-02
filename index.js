const express = require('express');
var bodyParser = require('body-parser');

require('dotenv').config();
const packageJson = require('./package.json');

var app = express();

app.use(bodyParser.json())


app.use(function(req, res, next) 
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
        next();
    }
);

const customerServices = require('./src');

app.get('/isAlive', 
    (req, res) => 
        {
            const result = {
                emoji : '🙂',
                name: packageJson.name,
                version : packageJson.version
            };

            sendResult(
                res,
                result
            );
        }
);

//========= CREATOR ======================

app.get('/creator',
    async (
        req,
        res
    ) =>
        {
            try
                {
                    const creatorList = await customerServices.creator.getAllCreatorList();

                    const result = {
                        creatorList : creatorList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch
            (
                error
            )
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.get('/creator/byZipCode/:zipCode',
    async (
        req,
        res
    ) =>
        {
            try
                {

                    const zipCode = parseInt(req.params['zipCode'])
                    const creatorList = await customerServices.creator.searchCreatorByZipcode(
                        {
                            zipcode:zipCode
                        }
                    );

                    const result = {
                        creatorList : creatorList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch
            (
                error
            )
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);


function sendResult
(
    res,
    data
)
    {
        res.json(data);
    }

function processError(
    res,
    error
)
    {
        console.error(
            error
        );

        res.status(400).json(
            {
                type:false,
                message: error.message 
            }
        );
    }


app.listen(
    process.env.PORT,
    function()
        {
            console.info('... بسم الله الرزاق ...');
            console.log(`Init ${packageJson.name} on ${process.env.PORT} : http://localhost:${process.env.PORT}`);
        }
);

