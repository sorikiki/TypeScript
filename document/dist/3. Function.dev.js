// ✅ Capture
// : As in JavaScript, a function can refer to variables outside of a function.
// => Note that only parameter types and return types constitute function types. Captured variables are not reflected in the type.

/*
    let z = 100;

    function addToZ(x, y) {
      return x + y + z;
    }
*/
// ✅ Two types of function: named and anonymous
// : You can omit return type because typeScript can determine the return type by looking at the return statement.

/*
    // named
    function add(x: number, y: number): number {
        return x + y;
    }

    // anonymous
    let myAdd = function(x: number, y: number): number { return x + y };
*/
// ✅ Let's review '2. Interfaces / Function types part'
// 1. If the types of parameters are listed correctly, naming the function type is considered valid.

/*
    let myAdd: (baseValue: number, increment: number) => number =
        function(x: number, y: number): number { return x + y; };
*/
// 2. contextual typing
// TypeScript compilers can identify types even if they only have types on one side of the equation.

/*
    let myAdd = function(x: number, y: number): number { return  x + y; };

    // or
    let myAdd: (baseValue: number, increment: number) => number =
        function(x, y) { return x + y; };
*/
// ✅ Parameter
// - In TypeScript, every parameter is assumed to be required by the function.
// + The compiler also assumes that these parameters are the only parameters that will be passed to the function.
// => In short, the number of arguments given to a function has to match the number of parameters the function expects.
// - In JavaScript, every parameter is optional, and users may leave them off as they see fit. When they do, their value is undefined. 
// => We can get this functionality in TypeScript by adding a ? to the end of parameters we want to be optional. 

/*
    function buildName(firstName: string, lastName?: string) {
      if (lastName) return firstName + " " + lastName;
      else return firstName;
    }

    let result1 = buildName("Bob"); // works correctly now
    let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
    Expected 1-2 arguments, but got 3.
    let result3 = buildName("Bob", "Adams"); // ah, just right
*/
// => Had we wanted to make the first name optional, rather than the last name, we would need to change the order of parameters in the function, putting the first name last in the list.
// - Default-initialized parameters
// : In TypeScript, we can also set a value that a parameter will be assigned if the user does not provide one, or if the user passes undefined in its place. 
// => They are treated as optional, and just like optional parameters, can be omitted when calling their respective function. (This means optional parameters and trailing default parameters will share commonality in their types, so both)
// => Unlike plain optional parameters, default-initialized parameters don’t need to occur after required parameters. If a default-initialized parameter comes before a required parameter, users need to explicitly pass undefined to get the default initialized value. 
// - rest parameters (Sometimes, you want to work with multiple parameters as a group, or you may not know how many parameters a function will ultimately take. )
// : In TypeScript, you can gather these arguments together into a variable:
// =>  In JavaScript, you can work with the arguments directly using the arguments variable that is visible inside every function body.

/*
    function buildName(firstName: string, ...restOfName: string[]) {
      return firstName + " " + restOfName.join(" ");
    }

    // employeeName will be "Joseph Samuel Lucas MacKinzie"
    let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
*/
// => Rest parameters are treated as a boundless number of optional parameters. When passing arguments for a rest parameter, you can use as many as you want; you can even pass none. 
// =>  The compiler will build an array of the arguments passed in with the name given after the ellipsis (...), allowing you to use it in your function.
"use strict";