import Todo_container from 'Components/todo_container';
import Todo_form from 'Components/todo_form';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import {API} from "./API";
import { GetTodos } from 'Helpers';

axios.defaults.baseURL = 'http://localhost:3000'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Todo_container />}/>
        <Route path='*' element={<Todo_container />}/>
        <Route path='/add_todo' element={<Todo_form />}/>
      </Routes>
    </div>
  )
}

export default App;