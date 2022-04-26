
import { Point } from './point'

let nullPoint: Point = new Point();
let pointA: Point = new Point(1, 5);
let pointB: Point = new Point(12.5, 45);

pointB.draw();
nullPoint.draw();

pointA.x = -4;