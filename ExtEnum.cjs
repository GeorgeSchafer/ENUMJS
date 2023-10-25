/**
 * @description
 *      EENUM is an Extended ENUM implementation which creates a parrallel map
 *      which allows users to associate values with their ENUM definitions.
 */

const Enum = require('./Enum.cjs')

function ensureUppercase(key) {
    if (typeof key === "string") {
        return key.toUpperCase();
    } else {
        return key;
    }
}

function splitObjectKeysValues(objArray){
    const data = {
        keys : [],
        values : []
    };

    objArray.forEach(obj => {
        const key = Object.keys(obj)[0];
        data.keys.push(key)
        data.values.push(obj.key)
    });

    return data;
}

module.exports = class ExtEnum extends Enum {
    constructor(objArray) { // obj = { key: value }

        if(Array.isArray(objArray)){
            const data = splitObjectKeysValues(objArray);
            super(data.keys);
            this.map = {};
            this.addValues(objArray);
        } else {
            throw new InvalidArrayError();
        }

    }

    addValue(keyValuePair){
        let key = Object.keys(keyValuePair)[0];
        let value = Object.values(keyValuePair)[0];
        key = ensureUppercase(key);
        this.map[key] = value;
    }

    addValues(keyValuePairArray){
        keyValuePairArray.forEach(pair => {
            this.addValue(pair);
        })
    }

    valueOf(){
        const Enum = this.booleans;
        const map = this.map;
        let result = {};
        Object.keys(Enum).forEach(key => {
            if(Enum[key]){
                result[key] = map[key];
            }
        });
        return result;
    }
}


