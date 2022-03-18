const server = require('./app.js');



//---------------------------------PAGOS-----------------------------------------//

server.listen(3001, () => {
    console.log("Server on port", 3001);
});
  //--------------------------------------------------------------------------//


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Escuchando en Puerto: http://localhost:${PORT}`));