import React from 'react';
import styled from 'styled-components';
import { Todo } from '../modules/todo';
import { useActionTodos } from '../hooks/useActionTodos';

const ListContainer = styled.li`
    list-style: none;
    width: 30%;
    display: flex;
    justify-content: space-between;
    `;

type ItemProps = {
    todo: Todo,
};

const TodoItem = ({ todo }: ItemProps) => {
    const { onDelete, onToggle } = useActionTodos(todo.id);
	return (
		<ListContainer>
			<span style={{ textDecoration: todo.done ? 'line-through' : 'none'}} onClick={onToggle}>{todo.text}</span>
			<span onClick={onDelete}>(X)</span>
		</ListContainer>
	);
};

export default TodoItem;
