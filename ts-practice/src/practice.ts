// ❗ All fields should be declared outside of a constructor.
// 
interface Shape {
    getArea(): number;
};

class Circle implements Shape {
    radius : number, // if this sentence is removed, compile error happens.

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