const { Router } = require('express');
const { check } = require('express-validator');

const errores = require('../helpers/errores.helper');
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
    check('nombre',).not().isEmpty().withMessage(errores.nombre),
    check('password').not().isEmpty().withMessage(errores.password),
    check('correo').isEmail().withMessage(errores.correo),
    check('correo').custom( correoDuplicado ).withMessage(errores.correoDuplicado),
    validarCampos
],usuariosPost);

router.put('/:id', [
    check('id').isMongoId().withMessage(errores.id),
    check('nombre').not().isEmpty().withMessage(errores.nombre),
    check('password').not().isEmpty().withMessage(errores.password),
    check('correo').isEmail().withMessage(errores.correo),
    check('id').custom( usuarioID ).withMessage(errores.idNoExiste),
    validarCampos
], usuariosPut);

router.patch('/:id', [
    check('id').isMongoId().withMessage(errores.id),
    check('admin').not().isEmpty().withMessage(errores.admin),
    check('admin').isBoolean().withMessage(errores.adminInvalido),
    check('id').custom( usuarioID ).withMessage(errores.idNoExiste),
    validarCampos
], usuariosPatch);

router.delete('/:id', [
    check('id').isMongoId().withMessage(errores.id),
    check('id').custom( usuarioID ).withMessage(errores.idNoExiste),
    validarCampos
], usuariosDelete);

module.exports = router;
