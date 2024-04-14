const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const Verifier = require("email-verifier");

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
const secretKey = process.env.SECRET_KEY;
mongoose.connect(DB_CONNECTION.replace('<password>', secretKey), {
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
app.use("/api/imgs", router.img_routes)

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Email verification endpoint
app.post("/api/verify-email", (req, res) => {
  const { email } = req.body;

  const verifier = new Verifier(
    process.env.WHOISAPI_USERNAME,
    process.env.WHOISAPI_PASSWORD
  );

  verifier.verify(email, (err, data) => {
    if (err) {
      console.error("Error verifying email:", err);
      res.status(500).json({ error: "An error occurred while verifying email" });
    } else {
      console.log("Email verification data:", data);
      // Check if the email is valid and deliverable
      if (data.formatCheck && data.deliverability) {
        // E-posta doğrulama başarılıysa, istediğiniz işlemleri yapabilirsiniz.
        // Örneğin, kullanıcının e-posta adresini kaydedebilir veya doğrulanmış bir kullanıcı olarak işaretleyebilirsiniz.
        res.json({ message: "Email is valid and deliverable" });
      } else {
        res.status(400).json({ error: "Email is not valid or deliverable" });
      }
    }
  });
});

app.post("/api/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

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
