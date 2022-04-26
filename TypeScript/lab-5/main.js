var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.getDistance = function (pointA, pointB) {
            console.log("Distance between A and B : " + (pointB.x - pointA.x));
        };
    }
    Point.prototype.draw = function () {
        console.log("{ X : " + this.x + " && Y : " + this.y + " }");
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');
    };
    return Point;
}());
var nullPoint = new Point();
var pointA = new Point(1, 5);
var pointB = new Point(12.5, 45);
pointB.draw();
nullPoint.draw();
pointA.setX(-4);
