import { configureStore } from '@reduxjs/toolkit'
import alunoReducer from '../src/slices/alunoSlice'

export const store = configureStore({
  reducer: {
    aluno:alunoReducer,
  },
})