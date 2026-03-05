import './App.css';
import { RecoilRoot } from 'recoil';
import AddTodo from './AppTodo';
import TodoList from './TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <h1>ToDo List</h1>
          <AddTodo />
          <TodoList />
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
