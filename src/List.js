import React from "react";
import Item from "./Item";

const List = ({todos, changeStyle,deleteTodo}) => {
  return (
    <ul>
      {
        todos.map(todo => (<Item key={todo.id} id={todo.id} content={todo.content} isDone={todo.isDone} changeStyle={changeStyle} deleteTodo={deleteTodo} />))
      }
    </ul>
  )
}

export default List