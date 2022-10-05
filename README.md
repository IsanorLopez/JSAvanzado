# API JSAvanzado

API determinada a interactuar bajo un esquema de manejo de usuarios.  

## Especificaciones tecnicas

- Mongo Atlas: Servicio de almacenamiento de informacion en la nube
- Mongoose: para manejar la conexion a la BD
- cors: habilita el intercambio de recursos de origen cruzado
- express: para definir y configurar el servidor
- bcryptjs: para manejar la encriptacion en el envio de informacion sensible al servidor
- express-validaros: para permitir las validaciones prebias a comsumir un endpoint
- dotenv: para manejar las variables de entorno

## Produccion

Actualmente el API se encuentra montada en **heroku**

[URL](https://api-jsavanzado.herokuapp.com/)

~~~URL
https://api-jsavanzado.herokuapp.com/
~~~

## Modo desarrollo

Este modo esta configurado para ejecutar **nodemon**, mismo que levantara el **API** en modo escucha sobre el puerto **8080**

- Descargar paquetes de node

~~~cmd
npm install
~~~

- Ejecutar comando

~~~cmd
npm run dev
~~~

## Schema

La base de datos llevar por nombre **UsuariosDB**

- nombre:   **string** **obligatorio**
- correo:   **string** **obligatorio** **unico**
- password: **string** **obligatorio**
- admin:    **boolean** **default = false**

## Get

Obtiene el listado completo de los documentos generados en la base de datos **UsuariosDB**

~~~cmd
/api/usuarios
~~~

## Post

Inserta un nuevo documento en la base de datos **UsuariosDB**

`*Nota: Se requieren al menos los datos nombre, correo y password establecidos como requeridos en el Schema, en el caso del correo ademas debe de ser unico`

~~~cmd
/api/usuarios
~~~

~~~json
{
    "nombre":"usuarioX",
    "correo":"test_@yahoo.com",
    "password":"123"
}
~~~

## Put

Actualiza por completo a un documento determinado en la base de datos **UsuariosDB**, especificando como parametro en la **URL** el id del documento mismo

`*Nota: Se requieren al menos los datos nombre, correo y password establecidos como requeridos en el Schema, en el caso del correo ademas debe de ser unico`

~~~cmd
/api/usuarios/<id documento>
~~~

~~~json
{
    "nombre":"UsuarioY",
    "correo":"test_@gmail.com",
    "password":"456"
}
~~~

## Patch

Permite cambiar la propiedad **admin** de un determinado documento, especificando como parametro en la **URL** el id del documento mismo

~~~cmd
/api/usuarios/<id documento>
~~~

~~~json
{
    "admin":False
}
~~~

## Delete

Permite elminar un determinado documento especificado por la **URL**

~~~cmd
/api/usuarios/<id documento>
~~~
