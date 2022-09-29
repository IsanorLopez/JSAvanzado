const express = require('express');

class Server {
    
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.listen();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Api corriendo en el puerto ${this.port}`);
        })
    }

}

module.exports = Server;
