"use strict";

const AWS = require("aws-sdk");
const SES = new AWS.SES();

function sendEmail(formData, callback) {
  // Build the SES parameters
  // Send the email
  const emailParams = {
    Source: "amnrsln.plus@gmail.com", // SES SENDING EMAIL
    ReplyToAddresses: [formData.email],
    Destination: {
      ToAddresses: ["amnrsln@gmail.com"] // SES RECEIVING EMAIL
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `
          Subject: ${formData.subject}
          Name: ${formData.name}
          Email: ${formData.email}\n
          ${formData.message}`
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New message from aminroslan.com"
      }
    }
  };

  SES.sendEmail(emailParams, callback);
}

module.exports.orobahnMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body);

  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        "Access-Control-Allow-Origin": "https://aminroslan.com",
        "Access-Control-Allow-Headers": "x-requested-with",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        message: err ? err.message : data
      })
    };

    callback(null, response);
  });
};
