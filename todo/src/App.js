import React, { useReducer } from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { initialState, reducer } from "./reducers/reducers";
import "../src/App.css"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: new Date(),
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const handleComplete = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODO" });
  };

  return (
    <div className="App">
      <h2>To-Do List!</h2>
      <p></p>
      <TodoForm addTodo={addTodo} />
      <TodoList state={state} handleComplete={handleComplete} />

      <button
        className="ClearButton"
        onClick={(event) => {
          event.preventDefault();
          clearCompleted();
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;
