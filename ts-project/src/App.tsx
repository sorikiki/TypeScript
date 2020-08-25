import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  const onShowName = (name: string) => {
    console.log(`${name} says hello`);
  };

  return (
    <div className="App">
      <Greeting name='dasol' onClick={onShowName} />
      <Counter />
    </div>
  );
}

export default App;
