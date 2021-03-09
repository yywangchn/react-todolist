import React, { Component } from "react";

class Todo extends Component {
  render() {
    const todo = this.props;
    // console.log(todo);
    const { id, completed, text } = todo;

    return (
      <li>
        <div onClick={() => this.props.onClick(id)}>
          <em className={completed ? "selected" : null}></em>
          <p style={{ textDecoration: completed ? "line-through" : "none" }}>
            {text}
          </p>
        </div>
        <span onClick={() => this.props.delClick(id)}>&times;</span>
      </li>
    );
  }
}

export default Todo;
