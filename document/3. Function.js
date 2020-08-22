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