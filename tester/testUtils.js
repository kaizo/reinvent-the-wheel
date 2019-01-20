// Tester has three steps:
// 1.- Load tester functions
// 2.- Load test files
// 3.- Execute tests and report

let testNameArray = [];
let tests = {};
let beforeEachFuncs = {};
let afterEachFuncs = {};

const getTestsObject = () => {
    return testNameArray.reduce((accum, name) => accum[name], tests);
};

export const define = (name, suite) => {
    const currentObject = getTestsObject();
    currentObject[name] = {};
    testNameArray.push(name);
    suite();
    testNameArray.pop();
};

export const it = (name, testFunc) => {
    const currentObject = getTestsObject();
    currentObject[name] = testFunc;
};

export const beforeEach = func => {
    beforeEachFuncs[testNameArray.join('$|||$')] = func;
};

export const afterEach = func => {
    afterEachFuncs[testNameArray.join('$|||$')] = func;
};
