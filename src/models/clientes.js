const mongoose = require("mongoose")

const clientesSchema = new mongoose.Schema({
    name : { type : String},
    email: { type: String },
    cpf: { type: Number },
    dataNascimento: { type: String },
    estadoCivil: { type: String },
    telefone: { type: String},
    comprou: { type: Boolean}
},{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

const clientes = mongoose.model('clientes', clientesSchema)

module.exports = clientes