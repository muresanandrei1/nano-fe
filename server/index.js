const express = require("express");
const consola = require("consola");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { Nuxt, Builder } = require("nuxt");
const app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "nano.rentacar.cluj@gmail.com",
    pass: "nanorentacar18",
  },
  // auth: {
  //   user: "nano.rentacar.cluj@gmail.com",
  //   pass: "rentacarnano!",
  // },
});

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .post("/email/send-mail", (req, res) => {
      const output = `
      <p>You have a new message</p>
      <h3>Contact details</h3>
    `;

      const mailOptions = {
        from: req.body.email, // sender address
        to: "muresan.1andrei@gmail.com", // list of receivers
        subject: "Comanda Nano Rent a car", // Subject line
        html: output, // plain text body
      };

      transporter.sendMail(mailOptions, function(err, info) {
        if (err) console.log(err);
        else {
          console.log(info);
          res.send("Sent");
        }
      });
    })
    .listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
