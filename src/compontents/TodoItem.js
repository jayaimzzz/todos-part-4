import React, { Component } from "react";
// import { connect } from 'react-redux';



class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={this.props.completed}
            onClick={this.props.toggleCompleted}
          />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={this.props.deleteTodo} />
        </div>
      </li>
    );
  }
}

// const mapStateToProps = state => {
//   return { todos: state.todos };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//       toggleCompleted: (todoID) => {dispatch(toggleTodo(todoID))},
//       deleteTodo: todoID => {dispatch(deleteTodo(todoID))}
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
export default TodoItem;
