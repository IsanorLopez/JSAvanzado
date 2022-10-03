const Usuario = require("../models/usuario");

const correoDuplicado =  async (correo = '') => {

    const existeCorreo = await Usuario.findOne({ correo });
    if ( existeCorreo) {
        throw new Error();   
    }

}

const usuarioID =  async ( id ) => {

    const existeUsuario = await Usuario.findById( id );
    if ( !existeUsuario) {
        throw new Error();   
    }

}

module.exports = {
    correoDuplicado,
    usuarioID
}