//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const useCaseServices = require('./use-cases')(
    {
       mongoDb_credentials: 
          {
             MONGODB_URI: process.env.MONGODB_URI,
             DATABASE_NAME: process.env.DATABASE_NAME
          }
    }
 );
 module.exports = useCaseServices;