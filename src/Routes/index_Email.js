const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.post('/send-email', async(req, res) => {
    const { nombre, email, telefono, comentatio } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Nombre Del Usuario: ${nombre}</li>
            <li>Emai Del Usuario: ${email}</li>
            <li>telefono Del Usuario: ${telefono}</li>
        </ul>
        <p>${comentatio}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'merlin.pouros@ethereal.email',
            pass: 'Nx9SPmfy9eG7HNKEF8'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"FaztTech Server" <testtwo@fazttech.xyz>', // sender address,
        to: 'merlin.pouros@ethereal.email',
        subject: 'Website Contact Form',
        //text: 'Hello World'
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.redirect('/');
});

module.exports = router;