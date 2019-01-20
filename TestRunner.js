

// Redo with two step approach
// 1.- Create data structure with all the tests and beforeEach and afterEach
// 2.- Execute test and report

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

window.define = (name, suite) => {
    const currentObject = getTestsObject();
    currentObject[name] = {};
    testNameArray.push(name);
    suite();
    testNameArray.pop();
};

window.it = (name, testFunc) => {
    const currentObject = getTestsObject();
    currentObject[name] = testFunc;
};

window.beforeEach = (func) => {
    beforeEachFuncs[testNameArray.join('$|||$')] = func;
}

window.afterEach = (func) => {
    afterEachFuncs[testNameArray.join('$|||$')] = func;
}


// Execute Test
window.test = (name, testFunc) => {
    testNameArray.push(name);
    try {
        beforeEachArray.forEach(func => {
            func();
        })
    } catch (err) {
        console.log('BeforeEach error')
        console.log(err)
        return;
    }
    try {
        const result = testFunc();
        if ( result instanceOf Promise ) {
            result.then(() => {
                console.log('OK - ' + testNameArray.join(' '));    
                testNameArray.pop();
            }).catch((err) => {
                console.log('FAIL - ' + testNameArray.join(' '));
                console.log(err);
                testNameArray.pop();
            })
        } else {
            console.log('OK - ' + testNameArray.join(' '));
            testNameArray.pop();
        }
    } catch (err) {
        console.log('FAIL - ' + testNameArray.join(' '));
        console.log(err);
        testNameArray.pop();
    }
}
