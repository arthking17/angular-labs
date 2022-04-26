
export class Point {

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