//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const useCaseServices = require('./use-cases')(
   {
      mongoDb_credentials: 
         {
            MONGODB_URI: process.env.MONGODB_URI,
            DATABASE_NAME: process.env.DATABASE_NAME
         },
      MAILGUN_SEND_EMAIL_URL:  process.env.MAILGUN_SEND_EMAIL_URL,
      TWILIO_CREDENTIALS: {
         ACCOUNT_SID: process.env.ACCOUNT_SID,
         AUTH_TOKEN: process.env.AUTH_TOKEN
      },
      TOWILIO_SMS_NUMBER: process.env.TOWILIO_SMS_NUMBER,
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
   }
 );
 module.exports = useCaseServices;