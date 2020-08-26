import React, { useState } from 'react';
import { useAddTodos } from '../hooks/useAddTodos';

const TodoInsert = () => {
    const [input, setInput] = useState('');
    const newTodo = useAddTodos();
    const onInsertTodos = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        newTodo(input);
        setInput('');
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    return (
        <div>
            <input 
                value={input}
                type='text'
                onChange={onChangeInput} 
            />
            <button onClick={onInsertTodos}>click</button>
        </div>
    )
};

export default TodoInsert;