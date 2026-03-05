import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./actions";

function App() {

  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>

      <h2>TODO</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;