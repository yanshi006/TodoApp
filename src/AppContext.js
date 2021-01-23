import React, { createContext } from "react";

const AppContext = createContext();



const AppProvider = ({children, todos,setTodos}) => {

  const deleteTodo = (id) => {
    setTodos(
      //ここの処理の意味は、todoのidと引数のidが一緒ではない配列を返している。
      todos.filter(todo => todo.id !== id)
    )
  }

  const changeStyle = (id) => {
    setTodos(
      todos.map(todo => {
        //この関数はcheckboxがonChangeしたときに実行される関数
        //このif文はidと一致している要素だけ、trueからfalseを切り替えている。
        //もしこのif文が無ければ、1つだけtrueからfalse、falseからtrueの切り替えができない。全て同時に切り替わってしまう。
        if (todo.id === id) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
    )
  }


  return (
    <AppContext.Provider value={[deleteTodo, changeStyle]}>
      {children}
    </AppContext.Provider>
  )
}

export {
  AppContext, 
  AppProvider
}