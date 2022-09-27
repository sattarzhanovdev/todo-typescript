import uuid from 'react-uuid/uuid';
import { createSlice, PayloadAction } from "@reduxjs/toolkit/dist";
import { Todo } from "./todo";
import axios from 'axios'
 
const initialState = [] as Todo[];
 
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      
      prepare: (description: string) => ({
        payload: {
          id: uuid(),
          description,
          completed: false,
        } as Todo,
      }),

      
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});
 
export const { addTodo, removeTodo, setTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;


