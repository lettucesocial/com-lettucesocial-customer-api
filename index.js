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

        Sentry.captureException(error);

        res.status(400).json(
            {
                type:false,
                message: error.message 
            }
        );
    }

const routerServices = require('./routes')(
    {
        express: express,
        customerServices: customerServices,
        processError:processError,
        sendResult: sendResult
    }
)

//========= CREATOR ======================

const creatorRoutes = routerServices.creator()
app.use('/creator', creatorRoutes);

//========= BUSINESS ======================

const businessRoutes = routerServices.business()
app.use('/business', businessRoutes);


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

