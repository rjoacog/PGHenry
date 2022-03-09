const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport');
const { v1: uuidv1, v4: uuidv4 } = require('uuid');



const transporter = nodemailer.createTransport(smtpTransport({
    host: process.env.EMAIL_HOST,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
}))


const sendMail = async function (payload = '') {
    console.log('email')
    
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
        await transporter.sendMail({
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
        await transporter.sendMail({
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
        await transporter.sendMail({
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


module.exports = {sendMail}