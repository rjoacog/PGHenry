const nodemailer  = require('nodemailer');


const emailRegistro = async ( datos ) => {
    const { email, name, token } = datos;
    //Desde mailtrap:
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
    })
    //informacion del email:
    const info = await transport.sendMail({
        from: '"Sneakers - Administrador de Usuarios" <cuentas@sneakers.com>',
        to: email,
        subject: 'Sneakers - Confirma tu cuenta.',
        text: 'Confirma tu Cuenta en Sneakers.',
        html: `<p>Hola ${name} Confirma tu cuenta en Sneakers.</p>
        <p>Tu cuenta está casi lista, solo debes comprobarla en el siguinte enlace:</p>

        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a>

        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })
};


module.exports = {
    emailRegistro,
}