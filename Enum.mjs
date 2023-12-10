// Import syntax
// make changes to this file, then copy them over to the ENUMJS.cjs file

/**
 * © 2023 George Schafer george.reflections@gmail.com
 * MIT License
 * 
 * @description
 *      Enum is an Enum implementation for Javascript with an optional extended
 *      Enum subclass.
 */
 
import { InvalidArrayError } from "./InvalidArrayError.mjs";
import { copyString, ensureUppercase, splitObjectKeysValues } from "./Utilities.mjs";

export class Enum {
    constructor(keyArray){
        if(Array.isArray(keyArray)){
            this.booleans = {};
            this.addKeys(keyArray);
            this.select(keyArray[0]);    
        } else {
            throw new InvalidArrayError(keyArray);
        }
    }

    addKey(key){
        const ENUM = this.booleans;
        if(typeof key === 'string'){
            key = copyString(key);
            key = ensureUppercase(key);
        }
        ENUM[key] = false;
    }

    addKeys(keyArray){
        keyArray.forEach( key => {
            this.addKey(key);
        })
    }

    select(key){
        key = ensureUppercase(key);

        const ENUM = this.booleans;

        Object.keys(ENUM).forEach(key => {
            ENUM[key] = false;
        });

        ENUM[key] = true;
    }

    valueOf(){
        const ENUM = this.booleans;
        
        return Object.keys(ENUM).find(key => ENUM[key]);
    }

    toString(fancy=false){
        const ENUM = this.booleans;
        const keyValuePairs = Object.keys(ENUM).map(key => `{${key}: ${ENUM[key]}}` );

        if(fancy){
            return `Enum {\n    ${keyValuePairs.join(',\n    ')}\n}`;
        } else {
            return `Enum {${keyValuePairs.join(',')}}\n`;
        }
    }
}

export class ExtEnum extends Enum {
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
