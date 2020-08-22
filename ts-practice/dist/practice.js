"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(2);
var rectangle = new Rectangle(10, 10);
console.log(circle.getArea()); // 12.56
console.log(rectangle.getArea()); // 100
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
tom.move(); // 45
tom.move(34); // 34
var person = {
    name: 'dasol',
    age: 20
};
var expert = {
    name: 'coder',
    skills: ['javascript', 'react']
};
var people = [person, expert];
console.log(people);
// ◽ getter and setter
console.clear();
var fullNameLength = 10;
var Employee = /** @class */ (function () {
    function Employee() {
        this._name = 'dasol';
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName && newName.length > fullNameLength) {
                throw new Error("fullName has a max length of " + fullNameLength);
            }
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return Employee;
}());
var employee = new Employee();
if (employee.name) {
    console.log(employee.name);
}
function getCounter() {
    var counter = (function (start) { return "The number is " + start; });
    counter.interval = 2;
    counter.reset = function () { console.log('reset() is called.'); };
    return counter;
}
var counter = getCounter();
console.log(counter(2));
console.log(counter.interval);
console.log(counter.reset());
