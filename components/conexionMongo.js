const mongoose = require('mongoose')
const TablaLista = require('../models/titulos')

mongoose.Promise = global.Promise

export const coneccion = async () =>{    
    console.log('empezo')
    await mongoose.connect('mongodb+srv://RubenRock:avla@cluster0.8afbh.mongodb.net/boveda?retryWrites=true&w=majority', {
         useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then((db) => console.log("Mongodb is connected to", db.connection.host))
    .catch((err) => console.error(err));

    console.log('termino')
}

export const leer = () =>{
    TablaLista.find().exec()
    .then(x => console.log(x))
}
