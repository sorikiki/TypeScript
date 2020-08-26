export const increase = () => ({
    type: 'INCREASE'
});

export const decrease = () => ({
    type: 'DECREASE'
})

export const increase_by = (diff : number) => ({
    type: 'INCREASE_BY',
    payload: diff
})

type CounterAction = { type: 'INCREASE' } | { type: 'DECREASE' } | { type: 'INCREASE_BY', payload: number };

type CounterState = {
    count: number
}

const initialState : CounterState = {
    count: 0
}

const counterReducer = (state: CounterState = initialState, action : CounterAction) : CounterState => {
    switch (action.type) {
          case 'INCREASE':
            return { count: state.count + 1 };
          case 'DECREASE':
            return { count: state.count - 1 };
          case 'INCREASE_BY':
            return { count: state.count + action.payload };
          default:
            return state;
        }
      }
      
export default counterReducer;