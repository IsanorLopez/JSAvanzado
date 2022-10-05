const { request, response } = require('express');

const { get, post, put, patch, erase } = require('../services/usuarios.service');

const usuariosGet = async (req, res = response) => {

    try {
        
        const usuarios = await get();

        res.status(200).json({
            usuarios
        });
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
}

const usuariosPost =  async (req = request, res = response) => {
    
    const {nombre, correo, password} = req.body;
    
    try {

        await post(nombre, correo, password);

        res.status(201).json({
            msg: 'Usuario dado de alta con exito'
        });

    } catch (error) {
        console.log(error)

        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
    
    
}

const usuariosPut = async (req = request, res = response) => {
    
    const { id } = req.params;
    const { nombre, correo, password } = req.body;

    try {
        
        await put(id, nombre, correo, password);

        res.status(202).json({
            msg: 'Usuario actualizado con exito'
        });

    } catch (error) {
       
        console.log(error)

        res.status(500).json({
            msg: 'Error en el servidor'
        });
        
    }
}

const usuariosPatch = async (req = request, res = response) => {
    
    const { id } = req.params;
    const { admin } = req.body;
    
    try {
        
        await patch(id, admin);

        res.status(202).json({
            msg: 'Cambio de atributo admin con exito'
        });

    } catch (error) {

        console.log(error)

        res.status(500).json({
            msg: 'Error en el servidor'
        });
        
    }

}

const usuariosDelete = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        await erase(id)

        res.status(200).json({
            msg: 'Usuario eliminado con exito'
        });
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
            msg: 'Error en el servidor'
        });

    }
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
