import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App;
