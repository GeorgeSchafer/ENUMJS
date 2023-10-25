/**
 * @description
 *      EENUM is an Extended ENUM implementation which creates a parrallel map
 *      which allows users to associate values with their ENUM definitions.
 */

const Enum = require('./Enum.cjs')
const { ensureUppercase, splitObjectKeysValues } = require('./Utilities.cjs')

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


