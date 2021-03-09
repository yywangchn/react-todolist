import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <div className="inner">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!this.ininput.value.trim()) {
              return;
            }
            console.log(this.ininput.value);
            this.props.addTodo(this.ininput.value);
            this.ininput.value = "";
          }}
        >
          <input
            type="text"
            placeholder="React Todolist"
            ref={(node) => {
              this.ininput = node;
            }}
          ></input>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
