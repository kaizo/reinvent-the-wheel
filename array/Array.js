Array.prototype.forEach = function(callback, thisArg) {
    let index;
    for (index = 0; index < this.length; index++) {
        callback.call(thisArg, this[index], index, this);
    }
};

Array.prototype.map = function(callback, thisArg) {
    let index;
    const newArray = [];
    for (index = 0; index < this.length; index++) {
        newArray[index] = callback.call(thisArg, this[index], index, this);
    }
    return newArray;
};

Array.prototype.reduce = function(callback, startValue) {
    const accumulated = startValue;
    for (index = 0; index < this.length; index++) {
        accumulated = callback(accumulated, this[index], index, this);
    }
    return accumulated;
};
