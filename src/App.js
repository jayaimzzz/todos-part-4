import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./compontents/TodoList.js";
import { NavLink, Switch, Route } from "react-router-dom";
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { toggleTodo, addTodo, deleteTodo, clearCompletedTodos, TOGGLE_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS } from './actions.js';

// import thunk from 'redux-thunk';


class App extends Component {
  // state = {
  //   todos: todosList,
  //   search: "",
  //   nextID: todosList.length + 1
  // };

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
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} render={()=> <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
            />}/>
          <Route path={process.env.PUBLIC_URL + "/active"} render={()=> <TodoList 
          todos={this.state.todos.filter(todo=>!todo.completed)}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
          />}/>
          <Route path={process.env.PUBLIC_URL + "/completed"} render={()=> <TodoList
          todos={this.state.todos.filter(todo=>todo.completed)}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
          />}/>
        </Switch>
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.state.todos.filter(todo => !todo.completed).length}
            </strong>{" "}
            item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="selected"
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/active"
                activeClassName="selected"
              >
                Active
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/completed"
                activeClassName="selected"
              >
                Completed
              </NavLink>
            </li>
          </ul>
          <button className="clear-completed" onClick={this.clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};
const mapDispatchToProps = dispatch => {
  return {
      toggleCompleted: (todoID) => {dispatch(toggleTodo(todoID))},
      deleteTodo: todoID => {dispatch(deleteTodo(todoID))},
      clearCompleted: () => {dispatch(clearCompletedTodos())},
      keyHandling: (todo) => {dispatch(addTodo(todo))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
