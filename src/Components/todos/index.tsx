import React from 'react';
import {Card, Container, Button, Typography, TextField, Checkbox, Box} from "@mui/material";
import {GetTodos} from "../../Helpers";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import {HiPencil} from 'react-icons/hi'
import zIndex from "@mui/material/styles/zIndex";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {API} from "../../API";

const Todos: React.FC = () => {
  const {todos}: any = GetTodos()

  const setDoneFunc = (id: number) => {
    todos?.forEach((item: any) => {
      // API.putIsDone(id, {"id": id, "title": item.title, "isDone": item.isDone === true ? false : true})
      console.log(item.isDone)
    })
  }

  const add = () => {
    API.postTodos({
      title: "Сделать что-то",
      isDone: false
    })
  }
  return (
    <div>
      <button
        style={{
          marginBottom: "50px"
        }}
        onClick={() => add()}
      >
        Click to add
      </button>
      {
        todos
          ?
          todos.reverse().map((item: any) => (
            <Card
              key={item.id}
              style={{
                width: '350px',
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 15px'
              }}
            >
              <Box
                display={'flex'}
                alignItems={'center'}
              >
                <Checkbox
                  inputProps={{ 'aria-label': 'controlled' }}
                  style={{
                    color: 'blue'
                  }}
                  onClick={() => {
                    setDoneFunc(item.id)
                  }}
                  checked={item.isDone ? true : false}
                />
                <Typography
                  style={item.isDone ? {textDecoration: 'line-through'} : {}}
                  variant={'h5'}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  style={{
                    color: 'blue'
                  }}
                />
              </Box>
            </Card>
          ))
          :
          <Card>
            <Typography
              variant={'h4'}
            >
              Empty!
            </Typography>
          </Card>
      }
    </div>
  );
};

export default Todos;
