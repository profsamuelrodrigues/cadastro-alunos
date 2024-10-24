import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  aluno : {
    nome: '',
    matricula: '',
    turma:''
  }
}

export const alunoSlice = createSlice({
  name: 'aluno',
  initialState,
  reducers: {
    atualizaAluno: (state, action) => {
      state.aluno = action.payload
    },
  },
})

export const { atualizaAluno } = alunoSlice.actions
export default alunoSlice.reducer
