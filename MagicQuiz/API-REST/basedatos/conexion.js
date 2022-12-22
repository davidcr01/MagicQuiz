const mongoose = require('mongoose');

const conexion = async() => {
    try{
        await mongoose.connect("mongodb+srv://dacal01:bXtb3ZbRIHSLFi5v@cluster0.dkffqmt.mongodb.net/test", {keepAlive: true, keepAliveInitialDelay: 300000});
        console.log("Conectado a la base de datos de MagicQuiz");
        
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports = {
    conexion
}