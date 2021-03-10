import React, { Component } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./components/VisibleTodoList";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    visibilityFilter: 0,
    nextID: 4,
    todos: [
      {
        id: 1,
        completed: false,
        text: "111",
      },
      {
        id: 2,
        completed: false,
        text: "222",
      },
      {
        id: 3,
        completed: false,
        text: "333",
      },
    ],
  };
  addTodo = (value) => {
    let { nextID, todos } = this.state;
    console.log(todos);
    todos.push({ id: ++nextID, completed: false, text: value });
    this.setState({ nextID, todos });
    console.log(todos);
  };
  handleClick = (id) => {
    let todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos });
  };
  handleDelClick = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };
  handleChange = (value) => {
    this.setState({ visibilityFilter: value });
  };
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <div className="container">
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <VisibleTodoList
            todos={this.state.todos}
            visibilityFilter={this.state.visibilityFilter}
            onClick={this.handleClick}
            delClick={this.handleDelClick}
          ></VisibleTodoList>
          <Footer
            visibilityFilter={this.state.visibilityFilter}
            onClick={this.handleChange}
          ></Footer>
        </div>
      </div>
    );
  }
}

export default App;
