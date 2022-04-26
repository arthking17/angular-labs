
class Point {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("{ X : " + this.x + " && Y : " + this.y + " }");
    }

    getDistance = (pointA: Point, pointB: Point) => {
        console.log("Distance between A and B : " + (pointB.x - pointA.x));
    }
}

let nullPoint: Point = new Point();
let pointA: Point = new Point(1, 5);
let pointB: Point = new Point(12.5, 45);

pointB.draw();
nullPoint.draw();