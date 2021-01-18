import React, { useState } from "react";

const Form = ({ addTodos }) => {

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
      <button type='submit'>click</button>
    </form>
  )
}

export default Form