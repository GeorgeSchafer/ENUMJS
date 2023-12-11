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
import { ensureUppercase, copyString, splitObjectKeysValues } from "./Utilities.mjs";

export default class Enum {
    constructor(keyArray){
        this.booleans = {};

        if(Array.isArray(keyArray)){
            keyArray.forEach(key => {
                this.addKey(key);
            })
            // this.addKeys(keyArray);
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
            return `Enum {${keyValuePairs.join(',')}}`;
        }
    }
}

export class ExtEnum extends Enum {
    constructor(objArray) { // obj = { key: value }

        if(Array.isArray(objArray)){
            const data = splitObjectKeysValues(objArray);
            super(data.keys);
            /**
             * @var codex
             *      Codex is a glossary of sorts which holds the value of each Enumerated Type
             *      Find the true key in this.booleans
             *      then use Codex to return the value
             */ 
            this.codex = {}; 
            this.addValues(objArray);
        } else {
            throw new InvalidArrayError();
        }

    }

    addValue(keyValuePair){
        let key = Object.keys(keyValuePair)[0];
        let value = Object.values(keyValuePair)[0]; // [key] string of color name
        key = ensureUppercase(key);
        this.codex[key] = value;
    }

    addValues(keyValuePairArray){
        keyValuePairArray.forEach(pair => {
            this.addValue(pair);
        })
    }

    /**
     * Colors is an Extended Enum with key-value pairs
     *      booleans hold the key that has the value as the true value
     *      codex needs the key:value
     */
    valueOf(){ // Problem
        const index = this.booleans;
        let cipher;
        const codex = this.codex;
        cipher = Object.keys(index).forEach( key => {
            if(index.key){
                cipher = key;
            }
        })

        return codex[cipher];
        
    }
}
