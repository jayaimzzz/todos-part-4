import React, { Component } from "react";
import TodoItem from "./TodoItem.js"


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

export default TodoList;
