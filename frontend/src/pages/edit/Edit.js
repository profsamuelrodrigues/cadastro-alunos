import './Edit.css'

//Hooks
import { useState } from "react"

import { useSelector } from 'react-redux'

const Edit = () => {
    const {aluno} = useSelector((state) => state.aluno)

    const [nome, setNome] = useState('')
    const [matricula, setMatricula] = useState("")
    const [turma, setTurma] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const newAluno = {
          nome,
          matricula,
          turma
        }
    
        const api = "http://localhost:5000" 
        const config = {
          method:'POST',
          body: JSON.stringify(newAluno),
          headers: {
            "Content-Type": "application/json"
          }
        }
    
        const res = await fetch(`${api}/alunos/register`, config)
        const data = await res.json()
        console.log(data)
    }


  return (
     <div id="edit">
      <h2>Editar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={aluno.nome || ""} autoComplete='of'/>
        <input type="text" placeholder="Matrícula" onChange={(e) => setMatricula(e.target.value)} value={aluno.matricula || ""} autoComplete='of' />
        <input type="text" placeholder="Turma" onChange={(e) => setTurma(e.target.value)} value={aluno.turma || ""} autoComplete='of' />
        <input type="submit" value="Editar" />
      </form>
    </div>
  )
}

export default Edit
