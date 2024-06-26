
require ('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT

const app = express()

// config JSON and form data response
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(cors({credentials: true, origin: '*'}))


//upload directory
app.use("./uploads", express.static(path.join(__dirname, "/uploads")))

//db connecion
require("./config/db.js")


//routes
const router = require('./routes/Router.js')
app.use(router)

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})