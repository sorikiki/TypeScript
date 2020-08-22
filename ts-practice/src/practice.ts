// ✅ Class
// ◽ All fields should be declared outside of a constructor.
// 
interface Shape {
    getArea(): number;
};

class Circle implements Shape {
    radius : number; // if this sentence is removed, compile error happens.

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(public width : number, public height : number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(2);
const rectangle = new Rectangle(10, 10);
console.log(circle.getArea()); // 12.56
console.log(rectangle.getArea()); // 100


// ◽ Heritance ( + interface )
// ❗ Note how the child class inherits the fields and methods of the parent class.
// ❗ Even if a parent class is checked for type, an inherited child class is not checked.
// ❗ Extending Interfaces is also available.

// Example 1

interface MovingAnimal {
    move() : void;
}

class Animal implements MovingAnimal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

tom.move(); // 45
tom.move(34); // 34

// Example 2

interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: 'dasol',
  age: 20
};

const expert: Developer = {
  name: 'coder',
  skills: ['javascript', 'react']
};

const people: Person[] = [person, expert];
console.log(people);

// ◽ getter and setter
console.clear();

const fullNameLength = 10;

class Employee {
    _name : string = 'dasol';

    get name() : string {
        return this._name;
    };
    
    set name(newName: string) {
        if (newName && newName.length > fullNameLength) {
            throw new Error("fullName has a max length of " + fullNameLength);
        }

        this._name = newName;
    }
}

let employee = new Employee();
if (employee.name) {
    console.log(employee.name);
}

// ✅ Hybrid Types
interface Counter {
    (start: number) : string;
    interval: number;
    reset(): void;
}

function getCounter() : Counter {
    let counter = (function(start: number) { return `The number is ${start}`;}) as Counter;
    counter.interval = 2;
    counter.reset = function() { console.log('reset() is called.')};
    return counter;
}


const counter = getCounter();
console.log(counter(2)); 
console.log(counter.interval);
console.log(counter.reset());

