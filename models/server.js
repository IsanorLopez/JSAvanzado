const express = require('express');

const { dbConection } = require('../DB/config')

class Server {
    
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        //Conexion a BD
        this.conectarDB();

        this.middlewares();

        this.routes();

        this.listen();
    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios.routes'));
    }
    
    async conectarDB (){
        await dbConection();
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
