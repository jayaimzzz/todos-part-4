import React, { Component } from "react";
import "./index.css";
// import todosList from "./todos.json";
import TodoList from "./compontents/TodoList.js";
import { NavLink, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
import { addTodo, clearCompletedTodos } from './actions.js';

// import thunk from 'redux-thunk';


class App extends Component {
  state = {
    // todos: todosList,
    search: "",
    // nextID: todosList.length + 1
  };

  // toggleCompleted = todosId => event => {
  //   let index = this.state.todos.findIndex(todo => todo.id === todosId);
  //   let newTodoList = this.state.todos.slice();
  //   newTodoList[index].completed = !newTodoList[index].completed;
  //   this.setState({ todos: newTodoList });
  // };

  // deleteTodo = todosId => event => {
  //   let index = this.state.todos.findIndex(todo => todo.id === todosId);
  //   let newTodoList = this.state.todos.slice();
  //   newTodoList.splice(index, 1);
  //   this.setState({ todos: newTodoList });
  // };

  handleLoadSearchResults = event => {
    this.setState({
      search: event.target.value
    });
  };

  // clearCompleted = () => {
  //   let newTodoList = this.state.todos.slice();
  //   newTodoList = newTodoList.filter(todo => todo.completed === false);
  //   this.setState({ todos: newTodoList });
  // };

  keyHandling = event => {
    if (event.keyCode === 13) {
      // const newTodo = {
      //   userId: 1,
      //   id: this.state.nextID,
      //   title: this.state.search,
      //   completed: false
      // };
      // const newTodoList = this.state.todos.slice();
      // newTodoList.push(newTodo);
      // this.setState(previousState => ({
      //   todos: newTodoList,
      //   search: "",
      //   nextID: previousState.nextID + 1
      // }));
      this.props.addTodo(this.state.search);
      this.setState({...this.state, search:""})
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
          <Route exact path={"/"} render={()=> <TodoList path="all"
            />}/>
          <Route path={"/active"} render={()=> <TodoList path="active"
          />}/>
          <Route path={"/completed"} render={()=> <TodoList path="completed"
          />}/>
        </Switch>
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.props.numberOfActiveTodos}
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
          <button className="clear-completed" onClick={this.props.clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { numberOfActiveTodos: state.todos.filter(todo => !todo.completed).length };
};
const mapDispatchToProps = dispatch => {
  return {
      // toggleCompleted: (todoID) => {dispatch(toggleTodo(todoID))},
      // deleteTodo: todoID => {dispatch(deleteTodo(todoID))},
      clearCompleted: () => {dispatch(clearCompletedTodos())},
      keyHandling: (todo) => {dispatch(addTodo(todo))},
      addTodo: (todo) => {dispatch(addTodo(todo))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
