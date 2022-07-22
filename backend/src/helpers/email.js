const nodemailer  = require('nodemailer');
const { v1: uuidv1, v4: uuidv4 } = require('uuid');

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

const emailPago = async ( datos ) => {
    const { email, id, amount, description, dni } = datos;
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
        from: '"Sneakers - Administrador de Pagos" <pagos@sneakers.com>',
        to: email,
        subject: 'Sneakers - Confirma tu pedido.',
        text: 'Confirma tu órden.',
        html: `<p>¡Hola gracias por tu compra!.</p>
        <p>Ésta es una confirmación de tu pedido.</p>
        <p>Tu factura por un total de $ ${amount}.00 realizada por el DNI: ${dni}</p>
        `
    })
};

const sendMail = async function (payload = '') {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
    })

    let total = 0
    let id = uuidv4().slice(0,7)

    let nameItems = []
    if (payload.shoppingCart) {
        payload.shoppingCart.forEach(item => {
            if (!nameItems.includes(item.name)) {
                nameItems.push(item.name)
            }})
            payload.shoppingCart.forEach(item => {
            total = total + item.subtotal
            }
            )
    }

    switch (payload.template) {
        case 'resetPassword':
        await transport.sendMail({
            from: '"Sneakers - Administrador de Usuarios" <cuentas@sneakers.com>',
            to: payload.email,
            subject: `Reset Password`,
            html: `Hi ${payload.name}! 
            <br> 
            If you request a password reset for your account please
            <a href=${payload.url}>click here</a>
            <br> 
            If you didn't please ignore this email
            `
        })
        break;
        
        case 'activateAccount':
        await transport.sendMail({
            from: '"Sneakers - Administrador de Usuarios" <cuentas@sneakers.com>',
            to: payload.email,
            subject: `${payload.name} Active your account`,
            html: `Hi ${payload.name}!
            <a href=${payload.url}>click here to activate your account</a>
            <br>
            Have a nice day!
            `
        }
        )
        break;
    
        case 'purchase':
        await transport.sendMail({
            from: '"Sneakers - Administrador de Usuarios" <cuentas@sneakers.com>',
            to: payload.email,
            subject: `Your order is ${payload.status} (Order details #${payload.orderId})`,
            html: `Hi ${payload.name}! These are the details of your purchase, have a nice day! :
            <br> 
            <ul>
            <li>
            Shipping Adress: ${payload.adress}
            </li>
            <li>items: <ul>${payload.shoppingCart.map(item => (nameItems.includes(item.name) ? '<br>'+
            nameItems.splice(nameItems.indexOf(item.name),1) +' x '+ item.quantity +' at US$ ' + item.subtotal
            +' each' : ''))}</ul>
            </li>
            <br>
            <li>TOTAL: US$ ${total}</li>
            </ul>
            `
        }
        )
        console.log('Message sent')
    }
}


module.exports = {
    emailRegistro,
    emailPago,
    sendMail
}