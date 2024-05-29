const nodemailer = require('nodemailer');

const SENDER = process.env.sender_email;
const SMTP_HOST = process.env.smtp_host; 
const SMTP_PORT = process.env.smtp_port; 
const SMTP_USER = process.env.smtp_user; 
const SMTP_PASS = process.env.smtp_pass; 

const response = {
    "isBase64Encoded": false,
    "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    "statusCode": 200,
    "body": "{\"result\": \"Success.\"}"
};

exports.handler = async function (event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    try {
        await sendEmail(event);
        context.succeed({
            statusCode: 200,
            message: "Email sent, check your inbox!"
        });
    } catch (error) {
        console.error('Error occurred:', error);
        context.fail({
            statusCode: 500,
            message: "Failed to send email",
            error: error.message,
            stack: error.stack
        });
    }
};

async function sendEmail(emailData) {
    let transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        }
    });

    let mailOptions = {
        from: SENDER,
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.body
    };

    await transporter.sendMail(mailOptions);
}
