/**
 * @description
 *      ExtEnum is an Enum that refers to extended 
 */
import Enum from './Enum.mjs'
import { InvalidArrayError } from './InvalidArrayError.mjs';
import { ensureUppercase } from './Utilities.mjs';

export class ExtEnum extends Enum {
    constructor(objArray) { // obj = { key: value }

        if(Array.isArray(objArray)){
            super(Object.keys(objArray));
            this.map = {};
            this.addValues(objArray);
        } else {
            throw new InvalidArrayError();
        }

        // let key = Object.keys(obj)[0];
        // const value = obj[key];
        // key = ensureUppercase(key);

        // super(key);
        // this.map = {};
        // this.map[key] = value;
    }

    addValue(keyValuePair){
        console.log('addvalue(keyValuePair), keyValuePair =', keyValuePair)
        let key = Object.keys(keyValuePair)[0];
        let value = Object.values(keyValuePair)[0];
        key = ensureUppercase(key);
        console.log('key =', key)
        this.map[key] = value;
    }

    // addKey(keyValuePair){
    //     console.log('addKey(keyValuePair) is adding:', keyValuePair)
    //     let key = Object.keys(keyValuePair)[0];
    //     key = ensureUppercase(key);
    //     this[key] = false;
    //     this.map[key] = keyValuePair.key;
    // }

    addValues(keyValuePairArray){
        keyValuePairArray.forEach(pair => {
            this.addValue(pair);
        })
    }

    // addKeys(keyValuePairArray){
    //     keyValuePairArray.forEach(pair => {
    //         this.addKey(pair);
    //     })
    // }

    valueOf(){
        const Enum = this.booleans;
        const map = this.map;
        let result = {};
        result = Object.keys(Enum).find(key => {
            const value = {};
            value[key] = map[key];
            return value;
        });
        return result;
    }
}
