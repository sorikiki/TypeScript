import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import ReducerSample from './ReducerSample';

function App() {
  const onShowName = (name: string) => {
    console.log(`${name} says hello`);
  };

  return (
    <div className="App">
      <Greeting name='dasol' onClick={onShowName} />
      <Counter />
      <ReducerSample />
    </div>
  );
}

export default App;
