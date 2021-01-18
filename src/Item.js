import React from "react";

const Item = ({id, content, isDone, changeStyle, deleteTodo}) => {
  return (
    <li>
      <input type='checkbox' onChange={() => {changeStyle(id)}} />
      <span style={
        {textDecoration: isDone ? 'line-through' : 'none'}
      }>{content}</span>
      <button type='submit' onClick={() => deleteTodo(id)}>delete</button>
    </li>
  )
}

export default Item