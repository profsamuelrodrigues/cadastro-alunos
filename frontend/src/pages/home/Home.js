import  './Home.css'
import{useState, useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import { atualizaAluno} from '../../slices/alunoSlice'
import { useDispatch } from 'react-redux'

const url = 'http://localhost:5000/alunos'

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [alunos, setAlunos]= useState([])
  const [aluno, setAluno]=useState()
  
  
  const getAllAlunos=async()=>{
    const res = await fetch(url)
    const data = await res.json()
    setAlunos(data)
  }

  const editar =  (id)=>{
    const items = alunos.filter(item=>(
      item._id === id
    ))
    setAluno(items[0])
    }
  
  useEffect(()=>{
    getAllAlunos()
  },[])

  useEffect(()=>{
    
    dispatch(atualizaAluno(aluno))
    if (aluno) {
      navigate("/edit")
    }
  },[aluno, dispatch, navigate])

  return (
      <div className='home'>
          <h1>Alunos</h1>
          <ul>
          {alunos.map((aluno)=>(
              <li key={aluno._id}>
                <div>
                  <h3 className='nome'>{aluno.nome}</h3>
                  <p className='matricula'> Matrìcula: {aluno.matricula} - Turma: {aluno.turma}</p>
                </div>
                <div>
                <input type="submit" id={aluno._id} value='Editar' onClick={e=>editar(e.target.id)} />
                <input type="submit" id={aluno._id} value='Excluir' onClick={e=>editar(e.target.id)} />
                </div>
              </li>   
            ))}
          </ul>
            
      </div>
  )
}

export default Home