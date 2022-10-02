const bcrypt = require('bcryptjs');
const { request, response } = require('express');
const { validationResult } = require('express-validator');

const Usuario = require('../models/usuario');

const usuariosGet = function (req, res = response) {
    res.json({
        msg: 'Get Api controller',
    });
}

const usuariosPost =  async (req = request, res = response) => {
    
    const {nombre, correo, password} = req.body;
    const usuario = new Usuario( { nombre, correo } );

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    //Verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if ( existeEmail ) {
        return res.status(400).json({
            msg: 'El correo ya esta registrado en la BD'
        });
    }

    //Encriptacion de contrasena
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync( password, salt);
    
    //Guardado en BD
    await usuario.save();
    
    res.status(201).json({
        msg: 'Usuario dado de alta con exito',
        usuario
    });
}

const usuariosPut = function (req = request, res = response) {
    
    const { id } = req.params;
    
    res.json({
        msg: 'Put Api controller',
        id
    });
}

const usuariosPatch = function (req = request, res = response) {
    
    const { id } = req.params;
    
    res.json({
        msg: 'Patch Api controller',
        id
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
