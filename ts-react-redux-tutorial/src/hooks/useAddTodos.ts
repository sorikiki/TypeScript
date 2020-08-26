import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { insert_todo } from '../modules/todo';

export const useAddTodos = () => {
    const dispatch = useDispatch();
    return useCallback((text: string) => dispatch(insert_todo(text)), [dispatch])
}