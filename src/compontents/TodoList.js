import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
import { connect } from "react-redux";
import { toggleTodo, addTodo, deleteTodo, clearCompletedTodos, TOGGLE_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS } from '../actions.js';


class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              title={todo.title}
              completed={todo.completed}
              key={todo.id}
              toggleCompleted={this.props.toggleCompleted(todo.id)}
              deleteTodo={this.props.deleteTodo(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};
const mapDispatchToProps = dispatch => {
  return {
      toggleCompleted: (todoID) => {dispatch(toggleTodo(todoID))},
      deleteTodo: todoID => {dispatch(deleteTodo(todoID))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
