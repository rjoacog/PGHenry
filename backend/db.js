const mongoose = require('mongoose');
require('dotenv').config();   

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log(`MongoDB conectado correctamente!!`);
  })
  .catch((error) => {
    console.log(`error: ${error.message}`)
    process.exit(1) 
  }
);