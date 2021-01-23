import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { AppContext } from "./AppContext";

const useStyle = makeStyles({
  button: {
    backgroundColor: 'skyblue',
    color: 'purple',
    '&:hover': {
      backgroundColor: 'blue'
    }
  }
})

const Item = ({ id, content, isDone }) => {

  const classes = useStyle();

  const [del, chgSty] = useContext(AppContext);

  return (
    <Box m={1}>
      <li>
        <input type='checkbox' onChange={() => { chgSty(id) }} />
        <span style={
          { textDecoration: isDone ? 'line-through red' : 'none' }
        }>{content}</span>
        <Button variant='outlined' size='small' className={classes.button} type='submit' onClick={() => del(id)}>delete</Button>
      </li>
    </Box>
  )
}

export default Item