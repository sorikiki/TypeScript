import { useDispatch } from 'react-redux';
import { delete_todo, toggle_todo } from '../modules/todo';

export const useActionTodos = (id: number) => {
    const dispatch = useDispatch();

    const onDelete = () => dispatch(delete_todo(id));
    const onToggle = () => dispatch(toggle_todo(id));

    return {onDelete, onToggle};
};