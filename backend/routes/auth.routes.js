// authRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const nodemailer = require('nodemailer');

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new User({ name, email, password });
        await user.save();

        const verificationCode = Math.random().toString(36).substr(2, 6);

        await sendVerificationEmail(email, verificationCode);

        res.status(201).send({ message: 'User registered successfully. Verification email sent.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'An error occurred while registering user.' });
    }
});

async function sendVerificationEmail(email, code) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_password',
        }
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Account Verification',
        text: `Please use the following verification code to activate your account: ${code}`
    };

    await transporter.sendMail(mailOptions);
}

module.exports = router;
