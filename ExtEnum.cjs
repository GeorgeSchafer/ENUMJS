/**
 * @description
 *      EENUM is an Extended ENUM implementation which creates a parrallel map
 *      which allows users to associate values with their ENUM definitions.
 */

const Enum = require('./Enum.cjs')

module.exports = class ExtEnum extends Enum {
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

    valueOf(){
        const ENUM = this.booleans;
        const map = this.map;
        let result = {};
        result = Object.keys(ENUM).find(key => {
            const value = {};
            value[key] = map[key];
            return value;
        });
        return result;
    }
}

function ensureUppercase(key) {
    if (typeof key === "string") {
        return key.toUpperCase();
    } else {
        return key;
    }
}







