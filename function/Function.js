Function.prototype.apply = function(thisArg, argsArray) {
    const key = Symbol();
    thisArg[key] = this;
    const result = thisArg[key](...argsArray);
    delete thisArg[key];
    return result;
};

Function.prototype.call = function(thisArg, ...argsArray) {
    return this.call(thisArg, argsArray);
};

Function.prototype.bind = function(thisArg, ...argsArray) {
    return (...args) => {
        return this.apply(thisArg, argsArray.concat(args));
    };
};
