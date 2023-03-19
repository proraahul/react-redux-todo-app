export const addTodo = (data) => {
  return {
      type : "ADD_TODO",
      payload : {
          id : new Date().getTime().toString(),
          data : data // data = inputdata from todo.js file
      }
  }
}

export const deleteTodo = (id) => {
  return {
      type : "DELETE_TODO",
      id : id
  }
}

export const removeTodo = () => {
  return {
      type : "REMOVE_TODO"
  }
}
// export const editTodo = () => {
//     return{
//         type: "EDIT_TODO"
//     }
// }


