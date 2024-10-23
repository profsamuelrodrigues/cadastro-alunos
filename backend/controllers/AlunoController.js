const Aluno = require('../models/Aluno.js') 
const mongoose = require('mongoose')

// registra um usuário
const register = async (req, res)=>{
    const {nome, matricula, turma} = req.body

    //verifica se o usuário já existe no sistema
    const aluno = await Aluno.findOne({matricula})
    if (aluno) {  
         res.status(422).json({errors:['Matrícula já cadastrada']})
         return
    }
    //cria um aluno
    const novoAluno = await Aluno.create({
        nome,
        matricula,
        turma,
        photo:`${matricula}.jpg`
    }) 

    //cerifica se o usuáriofoi criado com sucesso e retorna o aluno
    if (!novoAluno) {
         res.status(422).json({errors:['Erro inesperado. Favor tentar novamnete.']})
         return
    }

    res.status(201).json(novoAluno)
}

//atualiza um usuário
const update = async (req, res) => {
     const { id } = req.params
     const {nome, matricula, turma} = req.body 
     
     const aluno = await Aluno.findById(new mongoose.Types.ObjectId(id))

     if (nome) {
          aluno.nome = nome
     }

     if (matricula) {
          aluno.matricula = matricula
          aluno.photo = `${matricula}.jpg`
     }

     if (turma) {
          aluno.turma = turma
     }

     
     await aluno.save()

     res.status(200).json(aluno)
}
// busca um usuário pelo id
const getAlunoById = async (req, res) => {
     const { id } = req.params

     try {
          const aluno = await Aluno.findById(new mongoose.Types.ObjectId(id))

          if (!aluno) {
               res.status(404).json({ errors: ['Aluno não encontrado'] })
               return
          }

          res.status(200).json(aluno)

     } catch (error) {
          res.status(404).json({ errors: ['Aluno não encontrado'] })
          return
     }
}

// busca um usuário pelo id
const  getAllAlunos = async(req, res)=>{

     try {
          const alunos = await Aluno.find()
          res.status(200).json(alunos)

     } catch (error) {
          res.status(404).json({errors:['Ocorreu um erro. Tente novamente.']}) 
          return 
     }
}

// busca um usuário pelo id
const deleteById = async (req, res) => {

     const { id } = req.params
     try {
          const aluno = await Aluno.findById(new mongoose.Types.ObjectId(id))
          //verifica se o aluno existe
          if (!aluno) {
               res.status(404).json({ errors: ["Aluno não encontrado"] })
               return
          }

          await Aluno.findByIdAndDelete(aluno._id)

          res.status(201).json({ id: aluno.id, message: "Aluno exluido com sucesso" })

     } catch (error) {
          console.log(error)
          res.status(404).json({ errors: ['Aluno não encontrado.'] })
          return
     }
}

module.exports = {
     register,
     update,
     getAlunoById,
     getAllAlunos,
     deleteById,
}
