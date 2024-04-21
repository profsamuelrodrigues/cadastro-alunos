const mongoose = require('mongoose')
require ('dotenv').config()


const CON = process.env.LOCAL_CON


const conn = async ()=>{
    try {
        const dbCon = await mongoose.connect(CON)
        console.log('Conectado ao Banco de Dados')
        return dbCon
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn