const errores = {
    id:              { status: 406, desc: 'El id especificado no es valido'},
    idNoExiste:      { status: 404, desc: 'No existe usuario con el id especificado' },
    nombre:          { status: 400, desc: 'El nombre es obligatorio' },
    password:        { status: 400, desc: 'El password es obligatorio' },
    correo:          { status: 406, desc: 'El correo es invalido' },
    correoDuplicado: { status: 409, desc: 'El correo ya esta dado de alta en la BD' },
    admin:           { status: 400, desc: 'El admin es obligatorio' },
    adminInvalido:   { status: 406, desc: 'El atributo admin debe ser booleano' }
}

module.exports = errores