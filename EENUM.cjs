const ENUM = require('./ENUM.cjs')

module.exports = class EENUM extends ENUM {
    constructor(keyValuePair) { // keyValuePair = { key: value }
        let [key, value] = Object.entries(keyValuePair);
        super(ensureUppercase(key));
        key = ensureUppercase(key);
        this.key = true;
        this.map = {};
        this.map[key] = value;
    }

    addKey(keyValuePair) {
        [this.key, this.value] = Object.entries(keyValuePair);
        this.key = this.ensureUpperCase(key);
        this.key = false;
        this.map[this.key] = this.value;
    }

    addKeys(keyValuePairArray) {

    }

    valueOf() {
        Object.keys(this).forEach(key => {
            if (this[key]) {
                return map[key];
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