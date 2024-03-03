const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
dotenv.config();

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION
mongoose.connect(DB_CONNECTION.replace('<password>', DB_PASSWORD), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Mongo DB connected');
  })
  .catch((error) => {
    console.error('Mongo DB connection error:', error);
  });

const router = require("./routes");
app.use("/api/navbarLinks", router.navbarLinks_router);
app.use("/api/keratin", router.keratin_router);
app.use("/api/fenler", router.fenler_router);
app.use("/api/utuler", router.utuler_router);
app.use("/api/sacqulluq", router.sacqulluq_router);
app.use("/api/contact", router.contact_router);
app.use("/api/socialMediaLinks", router.socialMediaLinks_router);
app.use("/api/setler", router.setler_routes)
app.use("/api/suallar", router.suallar_routes)
app.use("/api/user", router.user_routes)
app.use("/api/login", router.login_routes)

app.post("/api/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_gmail_username@gmail.com',
      pass: 'your_gmail_password'
    }
  });

  const mailOptions = {
    from: 'your_gmail_username@gmail.com',
    to: 'recipient_email@example.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on PORT:${PORT}`);
});
