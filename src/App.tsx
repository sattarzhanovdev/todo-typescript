import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { addTodo, removeTodo, setTodoStatus } from "./store/todoSlice";
import { Typography, Container, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material'
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import './App.scss'
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const [todoDescription, setTodoDescription] = useState("");
 
  const todoList = useSelector((state: any) => state);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container 
      maxWidth="xs"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Typography style={{ textAlign: "center" }} variant="h3">
        Todo list app
      </Typography>
      <TextField
        variant="outlined"
        label="To Do Item"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
        style={{
          marginTop: '25px'
        }}  
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
        style={{
          marginTop: '25px'
        }}
      >
        Add Item
      </Button>
      <List>
        {todoList.map((item: any) => (
          <ListItem key={item.id}>
            <ListItemText
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeTodo(item.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Checkbox
                edge="end"
                value={item.completed}
                onChange={() => {
                  dispatch(
                    setTodoStatus({ completed: !item.completed, id: item.id })
                  );
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
 
export default App;