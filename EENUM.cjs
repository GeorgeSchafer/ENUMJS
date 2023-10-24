const ENUM = require('./ENUM.cjs')

module.exports = class EENUM extends ENUM {
    constructor(obj) { // obj = { key: value }
        let key = Object.keys(obj)[0];
        const value = obj[key];
        key = ensureUppercase(key);

        super(key);
        this.map = {};
        this.map[key] = value;
    }

    addKey(keyValuePair) {
        let key = Object.keys(keyValuePair)[0]
        key = ensureUppercase(key);
        this[key] = false;
        this.map[key] = keyValuePair.key;
    }

    addKeys(keyValuePairArray) {

    }

    valueOf() {
        Object.keys(this).forEach(key => {
            if (this[key]) {
                return this.map[key];
            }
        })
    }
}

function ensureUppercase(key) {
    if (typeof key == "string") {
        key = key.toUpperCase();
    }
    return key;
}