//task5

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mail.outlook.com",
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: "nourisinda@yahoo.fr",
    pass: "PASS_11",
  },
});

const mailOptions = {
  from: '"Sinda Nouri" <nourisinda@yahoo.fr>"',
  to: "sinda.nouri@esprit.tn",
  subject: "Sending Email using Node.js",
  text: "That was easy",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
