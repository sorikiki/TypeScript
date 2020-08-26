import React from 'react';
import styled from 'styled-components';
import { useTodos } from '../hooks/useTodos';
import TodoItem from './TodoItem';

const ListContainer = styled.ul`
    padding: 0;
    `
const TodoList = () => {
    const todoList = useTodos();
    
    if(todoList.length === 0) return <p>등록된 항목이 없습니다.</p>

    return (
        <ListContainer>
            {todoList.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </ListContainer>
    )
};

export default TodoList;