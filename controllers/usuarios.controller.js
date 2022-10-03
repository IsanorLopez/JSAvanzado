const { request, response } = require('express');

const encriptarConstrasena = require('../helpers/encriptacionPassword.helper');

const Usuario = require('../models/usuario');

const usuariosGet = function (req, res = response) {
    res.json({
        msg: 'Get Api controller',
    });
}

const usuariosPost =  async (req = request, res = response) => {
    
    const {nombre, correo, password} = req.body;
    const usuario = new Usuario( { nombre, correo } );

    usuario.password = encriptarConstrasena(password);
    
    await usuario.save();
    
    res.status(201).json({
        msg: 'Usuario dado de alta con exito'
    });
}

const usuariosPut = async (req = request, res = response) => {
    
    const { id } = req.params;
    const { nombre, correo, password } = req.body;

    const nuevoPassword = encriptarConstrasena(password);

    await Usuario.findByIdAndUpdate(id, { nombre, correo, password: nuevoPassword });
    
    res.status(201).json({
        msg: 'Usuario actualizado con exito'
    });
}

const usuariosPatch = async (req = request, res = response) => {
    
    const { id } = req.params;

    const { admin } = req.body;
    
    await Usuario.updateOne({ id }, { admin });

    res.status(201).json({
        msg: 'Cambio de atributo admin con exito'
    });
}

const usuariosDelete = function (req = request, res = response) {

    const query = req.query;

    res.json({
        msg: 'Delete Api controller',
        query
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
