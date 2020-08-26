import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { Todo } from '../modules/todo';

export const useTodos = () => {
    const todos : Todo[] = useSelector((state: RootState) => state.todoReducer);
    return todos;
};