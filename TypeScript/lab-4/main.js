var Point = /** @class */ (function () {
    function Point(x, y) {
        this.getDistance = function (pointA, pointB) {
            console.log("Distance between A and B : " + (pointB.x - pointA.x));
        };
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("{ X : " + this.x + " && Y : " + this.y + " }");
    };
    return Point;
}());
var nullPoint = new Point();
var pointA = new Point(1, 5);
var pointB = new Point(12.5, 45);
pointB.draw();
nullPoint.draw();
