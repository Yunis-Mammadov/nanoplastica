const nodemailer = require('nodemailer');

app.post('/api/send-email', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // E-posta gönderimi için nodemailer kullanımı
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'example@gmail.com', // Gmail hesabınızın adresi
            pass: 'password', // Gmail hesabınızın şifresi
        },
    });

    const mailOptions = {
        from: 'example@gmail.com',
        to: 'yunismammadovv@gmail.com', // Gönderilecek e-posta adresi
        subject: 'Yeni İletişim Formu Mesajı',
        text: `
      Ad: ${firstName} ${lastName}\n
      E-posta: ${email}\n
      Mesaj: ${message}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('E-posta gönderirken bir hata oluştu.');
        } else {
            console.log('E-posta gönderildi: ' + info.response);
            res.status(200).send('E-posta başarıyla gönderildi.');
        }
    });
});
