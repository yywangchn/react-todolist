import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="inner">
        <form>
          <input type="text" placeholder="React-Redux Todolist"></input>
          <button>Add Todo</button>
        </form>
      </div>
      <ul className="todo-list">
        <li>123456</li>
        <li>236</li>
        <li>43436</li>
      </ul>
    </div>
  );
}

export default App;
