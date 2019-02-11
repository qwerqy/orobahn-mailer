# Orobahn Serverless Mailer

This is the mailer for the site [aminroslan.com](https://aminroslan.com)'s Contact form.

## Installation

- Run `npm i`
- Make sure you have setup IAM & SES and retrieved the access key & secret key. Refer [here](https://www.smashingmagazine.com/2018/05/building-serverless-contact-form-static-website/) if you have not.
- With your credentials run `yarn sls config credentials --provider aws --key YOUR_ACCESS_KEY_ID --secret YOUR_SECRET_ACCESS_KEY`. Replace `YOUR_ACCESS_KEY_ID` and `YOUR_SECRET_KEY_KEY` with your credentials.

## Testing

- Run `yarn sls invoke local --function staticSiteMailer --path data.json`

## Deploy

- Run `yarn sls deploy -v`
