import React from 'react'
import {API} from "../API";

export const GetTodos = () => {
  const [ todos, setTodos ] = React.useState(null)
  const [ text, setText ] = React.useState('')

  React.useEffect(() => {
    API.getTodos()
      .then((res: any) => {
        setTodos(res.data)
        setText('hi')
      })
  }, [text])

  return {
    todos
  }
}
