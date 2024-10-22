import './Register.css'

//comonents
import { Link } from 'react-router-dom'

//Hooks
import { useState } from "react"

const Register = () => {

  const [nome, setNome] = useState("")
  const [matricula, setMatricula] = useState("")
  const [turma, setTurma] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const aluno = {
      nome,
      matricula,
      turma
    }

    const api = "http://localhost:5000" 
    const config = {
      method:'POST',
      body: JSON.stringify(aluno),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const res = await fetch(`${api}/alunos/register`, config)
    const data = await res.json()
    console.log(data)

    //dispatch(register(user))
  }
  
  return (
    <div id="register">
      <h2>Cadastro de Alunos</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={nome || ""} autoComplete='of'/>
        <input type="text" placeholder="Matrícula" onChange={(e) => setMatricula(e.target.value)} value={matricula || ""} autoComplete='of' />
        <input type="text" placeholder="Turma" onChange={(e) => setTurma(e.target.value)} value={turma || ""} autoComplete='of' />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default Register