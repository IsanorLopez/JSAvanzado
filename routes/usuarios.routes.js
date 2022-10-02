const { Router } = require('express');

const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios.controller');
const { check } = require('express-validator');

const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('correo', 'El correo es invalido').isEmail()
],usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/:id', usuariosPatch);

router.delete('/:id', usuariosDelete);

module.exports = router;
