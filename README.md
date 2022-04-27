# Angular Labs

Build ***Angular*** project for learning purpose 🔥

> Check verion of *Angular*, nodejs and npm

```shell
ng --version
```

> Launch Angular server

```shell
ng serve
```

![ng --version](ng-version.png "Angular version")

## Manage Server ( Spring Boot + *Angular* )

- [ ] Spring boot : project name ***server***
- [ ] Angular : project name ***serverapp***

![App preview](demo-app-screenshot.png "App preview")

## Task Tracker

- [ ] [json-server](https://www.npmjs.com/package/json-server) : backend extension used
- [ ] [angular-crash](https://github.com/arthking17/angular-labs/tree/main/Angular/angular-crash) : frontend app with ***Angular*** & ***Typescript***

![App preview](task-tracker.png "App preview")

![App preview (2)](task-tracker-2.png "App preview - Form new task")

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

```shell
npm install -g typescript
tsc --version
```

- [ ] Generate js file from ts file (ts=typescript)

```shell
tsc main.ts
```

- [ ] Execute js code from command line

```shell
node main.js
```
