// ✔ This file instructs how to use 'typesafe-actions' library when making projects using react-redux.

// ✅ 1. createAction: Create an enhanced action-creator with unlimited number of arguments.

/*
    import { createAction } from 'typesafe-actions';

    // - with type only
    const increment = createAction('INCREMENT');
    dispatch(increment());
    // { type: 'INCREMENT' };

    // - with type and payload
    const add = createAction('ADD', action => {
      return (amount: number) => action(amount);
    });
    dispatch(add(10));
    // { type: 'ADD', payload: number }

    // - with type and meta
    const getTodos = createAction('GET_TODOS', action => {
      return (params: Params) => action(undefined, params);
    });
    dispatch(getTodos('some_meta'));
    // { type: 'GET_TODOS', meta: Params }

    // - and finally with type, payload and meta
    const getTodo = createAction('GET_TODO', action => {
      return (id: string, meta: string) => action(id, meta);
    });
    dispatch(getTodo('some_id', 'some_meta'));
    // { type: 'GET_TODO', payload: string, meta: string }
*/

// ✅ 2. createAsyncAction: Create an object containing three enhanced action-creators to simplify handling of async flows (e.g. network request - request/success/failure).
/*
    createAsyncAction(
    requestType, successType, failureType, cancelType?
    )<TRequestPayload, TSuccessPayload, TFailurePayload, TCancelPayload?>()
*/

/* 
    import { createAsyncAction } from 'typesafe-actions';

    const fetchUsersAsync = createAsyncAction(
    'FETCH_USERS_REQUEST',
    'FETCH_USERS_SUCCESS',
    'FETCH_USERS_FAILURE'
    )<string, User[], Error>();

    dispatch(fetchUsersAsync.request(params));

    dispatch(fetchUsersAsync.success(response));

    dispatch(fetchUsersAsync.failure(err));

    // There is 4th optional argument to declare cancel action
    const fetchUsersAsync = createAsyncAction(
    'FETCH_USERS_REQUEST',
    'FETCH_USERS_SUCCESS',
    'FETCH_USERS_FAILURE'
    'FETCH_USERS_CANCEL'
    )<string, User[], Error, string>();

    dispatch(fetchUsersAsync.cancel('reason'));

*/

// ✅ 3. createReducer: Extending internal types to enable type-free syntax with createReducer

/* ✔ Use handleAction API chains 
    // using action-creators
    const counterReducer = createReducer(0)
      // state and action type is automatically inferred and return type is validated to be exact type
      .handleAction(add, (state, action) => state + action.payload)
      .handleAction(add, ... // <= error is shown on duplicated or invalid actions
      .handleAction(increment, (state, _) => state + 1)
      .handleAction(... // <= error is shown when all actions are handled
    

    // or handle multiple actions using array
      .handleAction([add, increment], (state, action) =>
        state + (action.type === 'ADD' ? action.payload : 1)
      );


    // all the same scenarios are working when using type-constants
    const counterReducer = createReducer(0)
      .handleAction('ADD', (state, action) => state + action.payload)
      .handleAction('INCREMENT', (state, _) => state + 1);
    
    counterReducer(0, add(4)); // => 4
    counterReducer(0, increment()); // => 1
*/
/* ✔ Use Array
    const login = createReducer(initialState, {
    [CHANGE_INPUT]: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.value
        })
    })
*/

// ✅ 4. ActionType: Powerful type-helper that will infer union type from import * as ... or action-creator map object. 

/*
    import { ActionType } from 'typesafe-actions';

    // with "import * as ..."
    import * as todos from './actions';
    export type TodosAction = ActionType<typeof todos>;
    // TodosAction: { type: 'action1' } | { type: 'action2' } | { type: 'action3' }

    // with nested action-creator map case
    const actions = {
      action1: createAction('action1'),
      nested: {
        action2: createAction('action2'),
        moreNested: {
          action3: createAction('action3'),
        },
      },
    };
    export type RootAction = ActionType<typeof actions>;
    // RootAction: { type: 'action1' } | { type: 'action2' } | { type: 'action3' }
*/

/* We can extend internal types of typesafe-actions module with RootAction definition of our application so that you don't need to pass generic type arguments with createReducer API:
    // types.d.ts
    import { ActionType } from 'typesafe-actions';

    export type RootAction = ActionType<typeof import('./actions').default>;

    declare module 'typesafe-actions' {
    interface Types {
        RootAction: RootAction;
    }
    }

    // now you can use
    createReducer(...)
    // instead of
    createReducer<State, Action>(...)
*/