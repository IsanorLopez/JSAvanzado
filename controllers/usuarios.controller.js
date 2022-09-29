const { request, response } = require('express');
const axios = require('axios')

const usuariosGet = function (req, res = response) {
    res.json({
        msg: 'Get Api controller',
    });
}

const usuariosPost = function (req = request, res = response) {
    
    const {nombre, edad} = req.body;
    
    res.json({
        msg: 'Post Api controller',
        nombre,
        edad
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
