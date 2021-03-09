import React, { Component } from "react";
import Todo from "./Todo";

class VisibleTodoList extends Component {
  render() {
    let { todos, visibilityFilter } = this.props;

    switch (visibilityFilter) {
      case 0:
        break;
      case 1:
        todos = todos.filter((todo) => todo.completed === false);
        break;
      case 2:
        todos = todos.filter((todo) => todo.completed === true);
        break;
      default:
        break;
    }
    return (
      <ul className="dodo-list">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              onClick={this.props.onClick}
              delClick={this.props.delClick}
            />
          );
        })}
      </ul>
    );
  }
}

export default VisibleTodoList;
