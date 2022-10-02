const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('BD Online')

    } catch (error) {
        console.log(error)
        throw new Error('Error en la conexion a la BD')
    }
}

module.exports = {
    dbConection
}
