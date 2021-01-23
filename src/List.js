import React from "react";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  back: {
    backgroundColor: '#ddd',
    padding: '30px',
    border: '1px solid black'
  }
})

const List = ({todos}) => {

  const classes = useStyle();

  return (
    <ul className={classes.back}>
      {
        todos.map(todo => (<Item key={todo.id} id={todo.id} content={todo.content} isDone={todo.isDone} />))
      }
    </ul>
  )
}

export default List