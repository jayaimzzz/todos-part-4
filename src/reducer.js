import { toggleTodo, addTodo, deleteTodo, clearCompletedTodos, TOGGLE_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS } from './actions.js';
import todosList from './todos.json';


const state = {
    todos: todosList,
    search: "",
    nextID: todosList.length + 1
  }
export const reducer = (state, action) => {
    switch (action.type){
        case TOGGLE_TODO:
        const index = state.todos.findIndex(todo => todo.id === action.payload);
        const todos = state.todos.slice();
        todos[index].completed = !todos[index].completed
        return {...state, todos};
        case ADD_TODO:
        const newTodo = {
            userId: 1,
            id: state.nextID,
            title: action.payload,
            completed: false
          };
        // const todos = state.todos.slice();
        todos.push(newTodo)
        const nextID = state.nextID + 1;
        return {
            todos,
            search: "",
            nextID
          }
        case DELETE_TODO:
        // const todos = state.todos.slice();
        // const index = todos.findIndex(todo => todo.id === action.payload);
        todos.splice(index,1);
        return {...state, todos};
        case CLEAR_COMPLETED_TODOS:
        // const todos = state.todos.slice();
        todos.filter(todo => todo.completed === false)
        return {...state, todos};
        default: return state;
    }
}

