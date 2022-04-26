
class Point {

    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log("{ X : " + this.x + " && Y : " + this.y + " }");
    }

    getDistance = (pointA: Point, pointB: Point) => {
        console.log("Distance between A and B : " + (pointB.x - pointA.x));
    }

    get x() {
        return this.x;
    }

    get y() {
        return this.y;
    }

    set x(value) {
        if( value < 0)
            throw new Error('Value cannot be less than 0.');
    }
}

let nullPoint: Point = new Point();
let pointA: Point = new Point(1, 5);
let pointB: Point = new Point(12.5, 45);

pointB.draw();
nullPoint.draw();

pointA.x = -4;