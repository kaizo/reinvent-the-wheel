
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
