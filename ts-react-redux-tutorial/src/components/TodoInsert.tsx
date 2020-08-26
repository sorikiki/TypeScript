import React, { useState } from 'react';

const TodoInsert = () => {
    const [input, setInput] = useState('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    return (
        <div>
            <input 
                value={input}
                type='text'
                onChange={onChangeInput} 
            />
            <button>click</button>
        </div>
    )
};

export default TodoInsert;