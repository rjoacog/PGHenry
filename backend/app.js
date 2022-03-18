const express = require('express');
const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose')
const cors = require("cors");
const routes = require('./src/routes/index.js');


require('./db.js');

const server = express();

//-------------------------------ADMIN JS-----------------------------------//
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')

AdminJS.registerAdapter(AdminJSMongoose)

const adminJs = new AdminJS({
  databases: [mongoose],
  rootPath: '/admin',
})

const router = AdminJSExpress.buildRouter(adminJs)

server.use(adminJs.options.rootPath, router)
server.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'))

//configurar CORS:
const whitelist = [ process.env.FRONTEND_URL ];
const corsOptions = {
    origin: function (origin, callback) {
        if(whitelist.includes(origin)) {
            //Puede consultar la API:
            callback(null, true)
        } else {
            //No permitido:
            callback( new Error('Error de Cors.'))
        }
    }
};
server.use(cors(corsOptions));

//Directorio publico
server.use( express.static('public') );

server.name = 'API';
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
