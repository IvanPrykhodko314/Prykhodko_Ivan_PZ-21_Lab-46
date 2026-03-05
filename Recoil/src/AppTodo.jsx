import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';
import { useState } from 'react';

export default function AddTodo() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [text, setText] = useState('');

  const add = () => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={add}>Add task</button>
    </div>
  );
}