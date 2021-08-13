const mongoose = require('mongoose');
const {Schema} =  mongoose;

const sucursalesSchema = new Schema({
    nombre : {type : String, required : true},
    valoracion : {type : Number, required : true},
    direccion : {type : String},
    x : {type : Number},
    y : {type : Number}
});

const sucursales = mongoose.model('sucursales', sucursalesSchema);
module.exports = sucursales;