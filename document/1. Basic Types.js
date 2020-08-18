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


// ◽ Tuple
// : Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. 
/*
    // Declare a tuple type
    let x: [string, number];
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    x = [10, "hello"]; // Error

    ✔ When accessing an element with a known index, the correct type is retrieved:
    console.log(x[0].substring(1)); // Ok

    console.log(x[1].substring(1));
    Property 'substring' does not exist on type 'number'.
*/


// ◽ Enum
// : As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
/*
    enum Color {
        Red,
        Green,
        Blue,
    }
    let c: Color = Color.Green;

    ✔ By default, enums begin numbering their members starting at 0.
    // => You can change this by manually setting the value of one of its members. 
    // => we can start the previous example at 1 instead of 0:
    enum Color {
        Red = 1,
        Green,
        Blue,
    }
    let c: Color = Color.Green;

    ✔ Or, even manually set all the values in the enum:
    enum Color {
        Red = 1,
        Green = 2,
        Blue = 4,
    }
    let c: Color = Color.Green;

    // Displays 2
    console.log(c);

    ✔ A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum.
    enum Color {
        Red = 1,
        Green,
        Blue,
    }
    let colorName: string = Color[2];

    // Displays 'Green'
    console.log(colorName);
*/

// ◽ Unknown
// : We may need to describe the type of variables that we do not know when we are writing an application. 
// => In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.
/*
    let notSure: unknown = 4;
    notSure = "maybe a string instead";

    // OK, definitely a boolean
    notSure = false;

    ✔ Type Conflict example

    //  Type 'unknown' is not assignable to 'number' type.
    declare const maybe: unknown;
    
    // 'maybe' could be a string, object, boolean, undefined, or other types
    const aNumber: number = maybe;

    // TypeScript knows that maybe is a boolean now
    if (maybe === true) {
    const aBoolean: boolean = maybe;
    // So, it cannot be a string
    const aString: string = maybe;
*/

// ◽ Any
// : In some situations, not all type information is available or it’s declaration would take an inappropriate amount of effort.
// =>  In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type.
// => Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist. 
/*
    declare function getValue(key: string): any;
    // OK, return value of 'getValue' is not checked
    const str: string = getValue("myString");
*/

// ◽ Void
// : void is a little like the opposite of any: the absence of having any type at all. 
// => Declaring variables of type void is not useful because you can only assign null or undefined to them.

// ◽ Null and Undefined
