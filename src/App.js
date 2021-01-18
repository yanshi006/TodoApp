import React, { useState } from "react";
import shortid from "shortid";
import Form from "./Form";
import List from "./List";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  back: {
    backgroundColor: '#aaa',
    padding: '30px',
    marginTop: '30px'
  },
  center: {
    textAlign: 'center'
  }
})

const App = () => {

  const classes = useStyle();

  const [todos, setTodos] = useState([
    {
      content: '課題をする',
      isDone: false,
      id: shortid.generate()
    },
    {
      content: '料理をする',
      isDone: false,
      id: shortid.generate()
    },
    {
      content: '洗濯をする',
      isDone: false,
      id: shortid.generate()
    }
  ])

  const changeStyle = (id) => {
    setTodos(
      todos.map(todo => {
        //このif文はどうして必要なのか
        if (todo.id === id) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos(
      //ここの処理の意味
      todos.filter(todo => todo.id !== id)
    )
  }

  const addTodos = (content) => {
    setTodos(
      [
        ...todos,
        {
          content: content,
          isDone: false,
          id: shortid.generate()
        }
      ]
    )
  }

  return (
    <>
      <Box className={classes.back}>
        <h1 className={classes.center}>Todo App</h1>
        <Form addTodos={addTodos} />
        <List todos={todos} changeStyle={changeStyle} deleteTodo={deleteTodo} />
      </Box>
    </>
  )
}

export default App