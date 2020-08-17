// ✅ TypeScript and Javascript :)
// : Javascript is a dynamic language.
// : TypeScript sits as a layer on-top of JavaScript, offering the features of JavaScript and then adds its own layer on top of that. 
// => This layer is the 'TypeScript type system'!

// ✅ Available Types
// 1. There are already a small set of primitive types available in JavaScript: 
// ex. boolean, bigint, null, number, string, symbol, object and undefined, which you can use in an interface. 

// 2. TypeScript extends this list with a few more.
// ex. any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen) void (a function which returns undefined or has no return value).

// ◽ Boolean
// : The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
// ex. let isDone: boolean = false;

// ◽ Number
// : As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. 
/* ex.
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
*/

// ◽ String
// : Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
// + You can also use template strings.
/* ex.
    let color: string = "blue";
    color = "red";

    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
*/


// ◽ Array
// : Array types can be written in one of two ways. 
// =>  In the first, you use the type of the elements followed by [] to denote an array of that element type:
// ex. let list: number[] = [1, 2, 3];

// => The second way uses a generic array type, Array<elemType>:
// ex. let list: Array<number> = [1, 2, 3];