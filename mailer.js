var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var app = express();
var port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "andrei@cirkular.ro",
    pass: "Quattrocanibali"
  }
});

app.post("/api/send-mail", (req, res) => {
  const output = `
        <p>You have a new message</p>
        <h3>Contact details</h3>
        <ul>
          <li>
            Name: ${req.body.name}
          </li>
          <li>
            Email: ${req.body.email}
          </li>
          <li>
            Phone-Number: ${req.body.phoneNumber}
          </li>
        </ul>
        <p>Message:</p>
        <p>
          ${req.body.message ? req.body.message : "There is no message"}
        </p>
      `;

  const mailOptions = {
    from: req.body.email, // sender address
    to: req.body.to, // list of receivers
    subject: `You got a new message from ${req.body.name}`, // Subject line
    html: output // plain text body
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else {
      console.log(info);
      res.send("Sent");
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
