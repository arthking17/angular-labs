
function log(message) {
    console.log(message);
}

var message = "Hello World!";
var number = 1;
let count = 2;
log(message);

for (let i = 0; i < 5; i++) {
    log("iter : " + i);
}
log("finally : " + i); //because of let 

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorGreen = 0;
const ColorRed = 1;
const ColorYellow = 2;

enum Color { Green = 0, Red = 1, Yellow = 2};
let backgroudColor = Color.Red;

let msg;
msg = "test";
let endswithT = (<string>msg).endsWith('t');
let alternativeWay = (msg as string).replace('e', 'o');
log(endswithT);
log(alternativeWay);