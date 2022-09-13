import axios from 'axios'

export const API = {
  getTodos: () => axios.get('/todos'),
  postTodos: (data: object) => axios.post('/todos', data),
  putIsDone: (id: number, value: any) => axios.put(`/todos/${id}`, value),
  deleteTodo: (id: number) => axios.delete(`/todos/${id}`),
}