import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyle = makeStyles({
  button: {
    backgroundColor: 'tomato',
    color: 'blue',
    '&:hover': {
      backgroundColor: 'pink'
    }
  }
})


const Form = ({ addTodos }) => {
  const classes = useStyle();

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      alert('今日の目標を作ろう')
    } else {
      addTodos(value);
    }
    // if (!value.trim('')) {
    //   alert('今日の目標を作ろう')
    // }


    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
      <Button size='small' className={classes.button} type='submit'>click</Button>
    </form>
  )
}

export default Form