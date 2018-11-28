// import React from 'react'
// import { Provider, connect } from 'react-redux'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// import rootReducer from './redux/reducers'

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';

export const toggleTodo = todoID => {
    return {
        type: TOGGLE_TODO,
        payload: todoID
    }
} 

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = todoID => {
    return {
        type: DELETE_TODO,
        payload: todoID
    }
}

export const clearCompletedTodos = () => {
    return {
        type: CLEAR_COMPLETED_TODOS
    }
}
