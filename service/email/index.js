import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "nano.rentacar.cluj@gmail.com",
    pass: "nanorentacar18",
  },
});

app.post("/", (req, res) => {
  const mailBody = req.body.body;
  const mailOptions = {
    from: "comanda@nanorental.ro", // sender address
    to: req.body.email, // list of receivers
    subject: "Comanda Nano Rent a car", // Subject line
    html: mailBody, // plain text body
  };

  transporter.sendMail(mailOptions);
  res.status(200).send();
});

export default app;
