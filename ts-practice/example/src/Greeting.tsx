import React from 'react';

interface GreetingsProps {
  name: string;
  mark: string;
  option?: string;
  onClick: (name: string) => void;
};

const Greetings = ({ name, mark, onClick, option }: GreetingsProps) => {
    const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;