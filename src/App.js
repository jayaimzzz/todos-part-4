import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./compontents/TodoList.js";

class App extends Component {
  state = {
    todos: todosList,
    search: "",
    nextID: todosList.length + 1
  };

  toggleCompleted = todosId => event => {
    let index = this.state.todos.findIndex(todo => todo.id === todosId);
    let newTodoList = this.state.todos.slice();
    newTodoList[index].completed = !newTodoList[index].completed;
    this.setState({ todos: newTodoList });
  };

  deleteTodo = todosId => event => {
    let index = this.state.todos.findIndex(todo => todo.id === todosId);
    let newTodoList = this.state.todos.slice();
    newTodoList.splice(index, 1);
    this.setState({ todos: newTodoList });
  };

  handleLoadSearchResults = event => {
    this.setState({
      search: event.target.value
    });
  };

  clearCompleted = () => {
    let newTodoList = this.state.todos.slice();
    newTodoList = newTodoList.filter(todo => todo.completed === false);
    this.setState({ todos: newTodoList });
  };

  keyHandling = event => {
    if (event.keyCode === 13) {
      const newTodo = {
        userId: 1,
        id: this.state.nextID,
        title: this.state.search,
        completed: false
      };
      const newTodoList = this.state.todos.slice();
      newTodoList.push(newTodo);
      this.setState(previousState => ({
        todos: newTodoList,
        search: "",
        nextID: previousState.nextID + 1
      }));
    }
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            type="text"
            value={this.state.search}
            onChange={this.handleLoadSearchResults}
            onKeyDown={this.keyHandling}
          />
        </header>
        <TodoList
          location={this.props.location.hash}
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.state.todos.filter(todo => !todo.completed).length}</strong> item(s) left
          </span>
          <ul className="filters">
            <li>
              <a href="#/" className={this.props.location.hash === "#/" ? "selected":""}>All</a>
            </li>
            <li>
              <a href="#/active" className={this.props.location.hash === "#/active" ? "selected":""}>Active</a>
            </li>
            <li>
              <a href="#/completed" className={this.props.location.hash === "#/completed" ? "selected":""}>Completed</a>
            </li>
          </ul>
          <button className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
