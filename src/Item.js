import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

const useStyle = makeStyles({
  button: {
    backgroundColor: 'skyblue',
    color: 'purple',
    '&:hover': {
      backgroundColor: 'blue'
    }
  }
})

const Item = ({ id, content, isDone, changeStyle, deleteTodo }) => {

  const classes = useStyle();

  return (
    <Box m={1}>
      <li>
        <input type='checkbox' onChange={() => { changeStyle(id) }} />
        <span style={
          { textDecoration: isDone ? 'line-through red' : 'none' }
        }>{content}</span>
        <Button variant='outlined' size='small' className={classes.button} type='submit' onClick={() => deleteTodo(id)}>delete</Button>
      </li>
    </Box>
  )
}

export default Item