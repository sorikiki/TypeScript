"use strict";
// ❗ All fields should be declared outside of a constructor.
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
// ✅ Heritance
