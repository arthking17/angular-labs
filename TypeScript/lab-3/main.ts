interface IPoint{
    x: number,
    y: number
    draw: () => void
}

let drawPoint = (point: IPoint) => {
    console.log("x : " + point.x + " && y : " + point.y);
    
}

let A = {x: 1, y: 2};
let B = {x: 15.5, y: 22};

drawPoint({
    x: 1,
    y: 2,
    draw() {
        console.log("x : " + this.x + " && y : " + this.y);
    }
});
drawPoint({
    x: 15.5,
    y: 22,
    draw() {
        console.log("x : " + this.x + " && y : " + this.y);
    }
});