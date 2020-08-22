// ❗ One of TypeScript’s core principles is that type checking focuses on the shape that values have. 
// Interface: Interface is the grammar used to specify the type for a class or object. ✨

// ✅ Declaring an interface to specify the type of object 
/*
    ✔ Notice that our object actually has more properties than this, but the compiler only checks that at least the ones required are present and match the types required.
    function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);

    ✔ We can write the same example again, this time using an interface to describe the requirement of having the label property that is a string.
    interface LabeledValue {
        label: string;
    }

    function printLabel(labeledObj: LabeledValue) {
        console.log(labeledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);

    ✔ the type checker does not require that these properties come in any sort of order, only that the properties the interface requires are present and have the required type.
*/

// ✅ Optional Properties 
// : Interfaces with optional properties are written similar to other interfaces, with each optional property denoted by a ? at the end of the property name in the declaration.
// => The advantage of optional properties is that you can describe these possibly available properties while still also preventing use of properties that are incompatible with determined type.
/*
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): {color: string; area: number} {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({color: "black"});
    // if you use 1 instead of "black", compile error occurs.
*/


// ✅ Readonly properties
// : Some properties should only be modifiable when an object is first created. You can specify this by putting readonly before the name of the property.
/*
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 };
    p1.x = 5; // error!
*/

// ✔ TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation.
/*
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    ro[0] = 12; // error!
    ro.push(5); // error!
    ro.length = 100; // error!
    a = ro; // error!
    // On the last line of the snippet you can see that even assigning the entire ReadonlyArray back to a normal array is illegal. 
    // You can still override it with a type assertion, though:
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;

    a = ro as number[];

    ✔ readonly vs const
    : The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. Variables use const whereas properties use readonly.
*/

// ✅ Excess Property Checks (related to Optional Properties)
// Object literals get special treatment and undergo excess property checking when assigning them to other variables, or passing them as arguments. 
// => If an object literal has any properties that the “target type” doesn’t have, you’ll get an error:
/*
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
        // ...
    }

    let mySquare = createSquare({ colour: "red", width: 100 }); // error!

    ✔ Getting around these checks is actually really simple. The easiest method is to just use a type assertion:
    let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

    ✔ However, a better approach might be to add a 'string index signature' if you’re sure that the object can have some extra properties that are used in some special way.
    interface SquareConfig {
        color?: string;
        width?: number;
        [propName: string]: any;
    }

    ✔ One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable:
    => Since squareOptions won’t undergo excess property checks, the compiler won’t give you an error.
    => The above workaround will work as long as you have a common property between squareOptions and SquareConfig. In this example, it was the property width.
    
    let squareOptions = { colour: "red", width: 100 };
    let mySquare = createSquare(squareOptions);

    let squareOptions = { colour: "red" };
    let mySquare = createSquare(squareOptions); // error!
*/
// ❗ Keep in mind that for simple code like above, you probably shouldn’t be trying to “get around” these checks.


// ✅ Function Types
// : To describe a function type with an interface, we give the interface 'a call signature'. 
// => This is like a function declaration with only the parameter list and return type given. Each parameter in the parameter list requires both name and type.
/* interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;

    ✔ For function types to correctly type check, the names of the parameters do not need to match. 
    => Function parameters are checked one at a time, with the type in each corresponding parameter position checked against each other. 
    
    ✔ If you do not want to specify types at all, TypeScript’s 'contextual typing' can infer the argument types since the function value is assigned directly to a variable of type SearchFunc. 
}
*/


// ✅ Indextable types ❓
// : Indexable types have an index signature that describes the types we can use to index into the object, along with the corresponding return types when indexing.
// => When indexing with a number, JavaScript will actually convert that to a string before indexing into an object. 
/*
    interface StringArray {
        [index: number]: string;
    }

    let myArray: StringArray;
    myArray = ["Bob", "Fred"];

    let myStr: string = myArray[0];
*/


// ✅ Class Types ❓
// : when we want to specify that certain conditions must be observed in a class, we use interface to set the requirements that the class should have.
// => you use the 'implements' keyword to specify that the class implements the requirements of a particular interface.


// ✅ Extending interfaces
// : This makes it possible to copy members from one interface to another.
// => An interface can scale multiple interfaces, creating a combination of all interfaces.

/*
    interface Shape {
        color: string;
    }   

    interface PenStroke {
        penWidth: number;
    }

    interface Square extends Shape, PenStroke {
        sideLength: number;
    }

    let square = {} as Square;
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
*/

// ✅ Hybrid Types
// : Due to the dynamic and flexible nature of JavaScript, objects operating in several types of combinations can be encountered.
// => ex. Object that acts as both a function and an object.
