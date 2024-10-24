const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema(
    {
        nome: String,
        matricula: String,
        turma: String,
        photo: String,
    },
    {
        timestamps: true
    }
)

const Aluno = mongoose.model('Aluno', userSchema)

module.exports = Aluno