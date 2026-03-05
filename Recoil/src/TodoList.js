import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from './atoms';
import { incompleteCount } from './recoil';

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const left = useRecoilValue(incompleteCount);

  const toggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div>
      <p>Incomplete: {left}</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.done} onChange={() => toggle(todo.id)} />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
