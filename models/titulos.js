const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TablaLista =  Schema({
    clave: String,
    nombre: String,
    detalle: String,
    fecha: String,   
},{
    timestamps:true,  //crea en automatico fecha de creacion y de modificacion
    versionKey: false,
}
)

module.exports = mongoose.model('Lista', TablaLista)