// ✅ useState
// : Just use Genetics to set what type of condition you have :)
// => Under what circumstances would it be better to use generic?
// 1. when the status may or may not be null.

/*
    type Information = { name: string; description: string };
    const [info, setInformation] = useState<Information | null>(null);
*/
// 2. When the type of state is an object or array with a tricky structure.

/*
    type Todo = { id: number; text: string; done: boolean };
    const [todos, setTodos] = useState<Todo[]>([]);
*/
// If you don't use generic, (not pretty 😡)

/*
    type Todo = { id: number; text: string; done: boolean };
    const [todos, setTodos] = useState([] as Todo[]);
*/
"use strict";