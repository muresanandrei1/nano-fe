import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "murinuareemail@gmail.com",
    pass: "Muresan1andrei!"
  }
});

app.post("/", (req, res) => {
  const mailBody = req.body.body;
  const mailOptions = {
    from: "comanda@nanorental.ro", // sender address
    to: req.body.email, // list of receivers
    subject: `You got a new message from andrei`, // Subject line
    html: mailBody // plain text body
  };

  transporter.sendMail(mailOptions);
  res.status(200).send();
});

export default app;
