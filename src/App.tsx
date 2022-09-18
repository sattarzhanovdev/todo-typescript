import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import todoSlice, { addTodo, removeTodo, setTodoStatus } from "./store/todoSlice";
import { Typography, Container, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material'
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [todoDescription, setTodoDescription] = useState("");
 
  const todoList = useSelector((state: any) => state);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    todoSlice.action.
  }, [todoList])


 


  //Rendering
  return (
    <Container maxWidth="xs">
      <Typography style={{ textAlign: "center" }} variant="h3">
        Redux List App
      </Typography>
      <TextField
        variant="outlined"
        label="To Do Item"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
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