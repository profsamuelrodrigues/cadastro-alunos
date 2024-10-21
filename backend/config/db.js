const mongoose = require("mongoose")

const dbUser = process.env.DB_USER
const dbPassord = process.env.DB_PASSWORD

//conexão com o banco de dados
const conn = async () => {
    try {
        //const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassord}@cluster0.wmdy9lc.mongodb.net/dbAlunos`)
        const dbConn = await mongoose.connect(`mongodb://localhost:27017/reactgram`)
        //'mongodb://localhost:27017/reactgram'
        console.log("Conectado ao banco de dados")
        return dbConn
        //return conn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn