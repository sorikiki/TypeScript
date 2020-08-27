import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increase_by } from '../modules/counter';

const Counter = () => {
    const count = useSelector((state: RootState) => state.counterReducer.count);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    
    const onIncreaseBy = () => dispatch(increase_by(5));
    return (
        <div>
            {count}
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
            <div>
                <button onClick={onIncreaseBy}>+5</button>
            </div>

        </div>
    )
}

export default Counter;