const Usuario = require("../models/usuario");

const correoDuplicado =  async (correo = '') => {

    const existeCorreo = await Usuario.findOne({ correo });
    if ( existeCorreo) {
        throw new Error(`El correo ${correo} ya esta dado de alta en la BD`);   
    }

}

const usuarioID =  async ( id ) => {

    const existeUsuario = await Usuario.findById( id );
    if ( !existeUsuario) {
        throw new Error(`No existe usuario con el id ${id}`);   
    }

}

module.exports = {
    correoDuplicado,
    usuarioID
}