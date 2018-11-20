import React, { Component } from "react";

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



export default TodoItem;
