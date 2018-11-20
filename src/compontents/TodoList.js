import React, { Component } from "react";
import TodoItem from "./TodoItem.js"


class TodoList extends Component {
  render() {
      let filteredTodos = this.props.todos.slice();
      if(this.props.location === "#/active"){filteredTodos = this.props.todos.filter(todo => !todo.completed)}
      if(this.props.location === "#/completed"){filteredTodos = this.props.todos.filter(todo => todo.completed)}
    return (
      <section className="main">
        <ul className="todo-list">
          {filteredTodos.map(todo => (
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
