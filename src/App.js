import React, { useState } from "react";
import shortid from "shortid";
import Form from "./Form";
import List from "./List";

const App = () => {

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
      <h1>Todo App</h1>
      <Form addTodos={addTodos} />
      <List todos={todos} changeStyle={changeStyle} deleteTodo={deleteTodo} />
    </>
  )
}

export default App