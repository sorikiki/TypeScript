import React from 'react';
import { useTodos } from '../hooks/useTodos';

const TodoList = () => {
    const todoList = useTodos();
    
    if(todoList.length === 0) return <p>등록된 항목이 없습니다.</p>

    return (
        <ul>
            {todoList.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    )
};

export default TodoList;