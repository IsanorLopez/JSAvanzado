const { Router } = require('express');
const { check } = require('express-validator');

const { correoDuplicado, usuarioID } = require('../helpers/validators.helper');
const validarCampos = require('../middlewares/validarCampos.middleware');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut,
        usuariosDelete,
        usuariosPatch} = require('../controllers/usuarios.controller');

const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('correo', 'El correo es invalido').isEmail(),
    check('correo').custom( correoDuplicado),
    validarCampos
],usuariosPost);

router.put('/:id', [
    check('id', 'El id especificado no es valido').isMongoId(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('correo', 'El correo es invalido').isEmail(),
    check('correo').custom( correoDuplicado ),
    check('id').custom( usuarioID ),
    validarCampos
], usuariosPut);

router.patch('/:id', [
    check('admin', 'El admin es obligatorio').not().isEmpty(),
    check('admin', 'admin es un atributo que debe ser booleano').isBoolean(),
    validarCampos
], usuariosPatch);

router.delete('/:id', usuariosDelete);

module.exports = router;
