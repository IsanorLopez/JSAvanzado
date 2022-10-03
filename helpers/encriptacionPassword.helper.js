const bcrypt = require('bcryptjs');

const encriptarConstrasena = ( password ) => {

    const salt = bcrypt.genSaltSync();
    const passwordEncriptado = bcrypt.hashSync( password, salt);

    return passwordEncriptado;
}

module.exports = encriptarConstrasena;