const express = require('express');

class Server {
    
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.middlewares();

        this.routes();

        this.listen();
    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios.routes'));
    }

    middlewares() {

        // Lectura y parseo del body en una peticion
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Api corriendo en el puerto ${this.port}`);
        })
    }

}

module.exports = Server;
