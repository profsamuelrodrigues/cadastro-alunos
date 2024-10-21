const Aluno = require('../models/Aluno.js') 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const jwtSecret = process.env.JWT_SECRET

//gera token do usuário
const generateToken = (id)=>{
    return jwt.sign(
    {id}, 
    jwtSecret, 
    {expiresIn:'7d'}
    )
}

// registra um usuário
const registrar = async (req, res)=>{
    const {nome, matricula, turma} = req.body

    //verifica se o usuário já existe no sistema
    const aluno = await Aluno.findOne({matricula})
    //const aluno = await Aluno.findOne({matricula})

    if (aluno) {  
         res.status(422).json({errors:['Matrícula já cadastrada']})
         return
    }

    //gera senha hash
    /* const salt = await bcrypt.genSalt()

    const passwordHash = await bcrypt.hash(password, salt) */
    
    //cria um aluno
    const novoAluno = await Aluno.create({
        nome,
        matricula,
        turma,
        urlImagem:`${matricula}.jpg`
    }) 

    //cerifica se o usuáriofoi criado com sucesso e retorna o token 
    if (!novoAluno) {
         res.status(422).json({errors:['Erro inesperado. Favor tentar novamnete.']})
         return
    }

    res.status(201).json({
        _id: novoAluno._id,
        nome: novoAluno.nome,
        //token: generateToken(newUser._id)
    })
}

 //loga o usuário no sistema
/*  const  login = async(req, res)=>{
     const {email, password} = req.body

     const user = await User.findOne({email})

     //verifica se o usuário existe
     if (!user) {
          res.status(404).json({errors:['Usuário não encontrado.']})
          return
     }

     //verifica as senhas
     if (!(await bcrypt.compare(password, user.password))) {
          res.status(422).json({errors:['Senha inválida.']})
          return
     }

     //retorna o usuário com o token
     res.status(201).json({
          _id: user._id,
          //profieImage: user.profileImage,
          token: generateToken(user._id)
     })
} */

// pega o usuário logado
const getCurrentUser = (req, res)=>{
     const user = req.user
     res.status(200).json(user)
}

//atualiza um usuário
/* const  update = async(req, res)=>{
     const {name, password, bio} = req.body 
     let profileImage = null

     const reqUser = req.user
     
     if (req.file) {
     profileImage = req.file.filename
     }

     const user = await User.findById(new mongoose.Types.ObjectId(reqUser._id)).select('-password')

     if (name) {
          user.name = name
     }

     if (password) {
          //gera senha hash
          const salt = await bcrypt.genSalt()
          const passwordHash = await bcrypt.hash(password, salt)
          user.password = passwordHash
     }

     if (profileImage) {
          user.profileImage = profileImage
     }

     if (bio) {
          user.bio = bio
     } 
     
     await user.save()

     res.status(200).json(user)
} */

// busca um usuário pelo id
/* const  getUserById = async(req, res)=>{
     const {id} = req.params

     try {
          const user = await User.findById(new mongoose.Types.ObjectId(id)).select('-password')

          if(!user) {
               res.status(404).json({errors:['Usuário não encontrado']}) 
               return
          }

          res.status(200).json(user)

     } catch (error) {
          res.status(404).json({errors:['Usuário não encontrado']}) 
          return 
     }
} */

module.exports = {
    registrar,
   /*  login,
    getCurrentUser,
    update,
    getUserById, */
}
