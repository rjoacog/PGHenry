const server = require('./app.js');

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Escuchando en Puerto: http://localhost:${PORT}`));