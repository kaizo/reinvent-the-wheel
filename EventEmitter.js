export default class Emitter {
    constructor(isAsync) {
        this.callbacks = {};
        this.isAsync = isAsync;
    }

    subscribe(eventName, callback) {
        const key = Symbol();
        this.callbacks[eventName][key] = callback;
        return key;
    }

    unsubscribe(eventName, key) {
        delete this.callbacks[eventName][key];
    }

    emit(eventName, data) {
        if (this.isAsync) {
            window.setTimeout(() => {
                Object.values(this.eventName[name]).forEach(event => {
                    event(data);
                });
            }, 0);
        } else {
            Object.values(this.eventName[name]).forEach(event => {
                event(data);
            });
        }
    }
}
