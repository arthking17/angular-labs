# Angular Labs
Build ***Angular*** project for learning purpose 🔥

> Check verion of *Angular*, nodejs and npm
```
ng --version
```
> Launch Angular server
```
ng serve
```
![ng --version](ng-version.png "Angular version")

## Manage Server ( Spring Boot + *Angular* )
- [ ] Spring boot : project name ***server***
- [ ] Angular : project name ***serverapp***

![App preview](demo-app-screenshot.png "App preview")


## TypeScript

- [ ] Pro
. Error detection in code instead of js
. compile language
- [ ] Rules
. Multiple constructor is not allowed in Typescript
- [ ] DataType
```ts
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
```

- [ ] install typescript
```
npm install -g typescript
tsc --version
```
- [ ] Generate js file from ts file (ts=typescript)
```
tsc main.ts
```
- [ ] Execute js code from command line
```
node main.js
```