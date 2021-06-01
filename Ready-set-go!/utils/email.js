const nodemailer = require('nodemailer');
// eslint-disable-next-line no-unused-vars

const sendEmail = async (options) => {
  //creating transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // defining email options
  const mailOptions = {
    from: 'Divyansh Sharma <divyanshsharma7765@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //sending the email
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
