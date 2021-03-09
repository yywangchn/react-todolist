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
        text: "111",
      },
      {
        id: 3,
        completed: false,
        text: "111",
      },
    ],
  };
  addTodo = (value) => {
    let { nextID, todos } = this.state;
    todos.push({ id: ++nextID, completed: false, value });
    this.setState({ nextID, todos });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="container">
          <AddTodo addTodo={this.addTodo}></AddTodo>
          {/* <VisibleTodoList></VisibleTodoList> */}
          {/* <Footer></Footer> */}
        </div>
      </div>
    );
  }
}

export default App;
