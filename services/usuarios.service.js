const encriptarConstrasena = require('../helpers/encriptacionPassword.helper');

const Usuario = require('../models/usuario');

const get = () => {

    return new Promise( async (resolve) => {

        const usuarios = await Usuario.find({});
        resolve(usuarios)

    });
    
}

const post = (nombre, correo, password) => {

    return new Promise( async (resolve) => {

        const usuario = new Usuario( { nombre, correo } );
        usuario.password = encriptarConstrasena(password);
        await usuario.save();
        resolve();

    });
    
}

const put = (id, nombre, correo, password) => {

    return new Promise( async (resolve) => {

        const nuevoPassword = encriptarConstrasena(password);
        await Usuario.findByIdAndUpdate(id, { nombre, correo, password: nuevoPassword });
        resolve();

    });

}

const patch = (id, admin) => {

    return new Promise( async (resolve) => {

        await Usuario.findByIdAndUpdate(id, { admin });
        resolve();

    });

}

const erase = (id) => {

    return new Promise( async (resolve) => {

        await Usuario.findByIdAndDelete(id);
        resolve();

    });

}

module.exports = {
    get,
    post,
    put,
    patch,
    erase
}
