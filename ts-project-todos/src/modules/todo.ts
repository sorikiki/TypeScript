const INSERT = 'todo/INSERT' as const;
const DELETE = 'todo/DELETE' as const;
const TOGGLE = 'todo/TOGGLE' as const;

export const insert_todo = (text : string) => ({
    type: INSERT,
    payload: text,
});

export const delete_todo = (id: number) => ({
    type: DELETE,
    payload: id,
});

export const toggle_todo = (id: number) => ({
    type: TOGGLE,
    payload: id,
})

type TodosAction =
  | ReturnType<typeof insert_todo>
  | ReturnType<typeof delete_todo>
  | ReturnType<typeof toggle_todo>;

export type Todo = {
    id: number,
    text: string,
    done: boolean,
};

type TodoState = Todo[];

const initialState : TodoState = [];

let id = 1;

const todoReducer = (state: TodoState = initialState, action: TodosAction) => {
    switch(action.type) {
        case INSERT:
            {   
                id++;
                return state.concat({id, text: action.payload, done: false});
            }
        case DELETE:
            return state.filter(todo => todo.id !== action.payload);
        case TOGGLE:
            return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo);
        default:
            return state;
    }
};

export default todoReducer;