import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo} from '../actions.js';


class TodoList extends Component {
 
  render() {
    // let newTodos = this.props.todos.slice();
    const active = todo => !todo.completed;
    const completed = todo => todo.completed;
    const all = todo => todo
    
    return (
      <section className="main">
        <ul className="todo-list">
        
          {this.props.todos.filter(eval(this.props.path)).map(todo => (
            <TodoItem
              title={todo.title}
              completed={todo.completed}
              key={todo.id}
              toggleCompleted={() => this.props.toggleCompleted(todo.id)}
              deleteTodo={() => this.props.deleteTodo(todo.id)}
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
