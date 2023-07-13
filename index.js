var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'niveatha2004@gmail.com',
    pass: 'hrfortudddooucfm'//this is app pass not acc pass(generated wen we changed settings in security)
  }
});

const mailOptions = {
  from: 'niveatha2004@gmail.com',
  to: 'dineshrajan89334@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hii'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});