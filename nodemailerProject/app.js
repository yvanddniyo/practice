const  AWS = require('aws-sdk');
const ses = new AWS.SES();
 
let RECEIVER;
const SENDER = process.env.sender_email;

const response = {
 "isBase64Encoded": false,
 "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
 "statusCode": 200,
 "body": "{\"result\": \"Success.\"}"
 };

exports. handler = function (event, context) {
 console.log('Received event:', event);
 sendEmail(event, function (err, data) {
 context.done(err,{
  status: 200,
  message: "email sent check your inbox!"
 });
 });
};
 
function sendEmail(emailData, done) {
  const params = {
    Destination: {
      ToAddresses: [emailData.to]
    },
    Message: {
      Body: {
        Html: {
          Data: emailData.body,
          Charset: 'UTF-8'
        }
      },
      Subject: {
        Data: emailData.subject,
        Charset: 'UTF-8'
      }
    },
    Source: SENDER
  };
  RECEIVER = emailData.to;

  ses.sendEmail(params, done);
}