// Import syntax
// make changes to this file, then copy them over to the ENUMJS.cjs file
import { InvalidArrayError } from "./InvalidArrayError.mjs";
import { ensureUppercase } from "./Utilities.mjs";

export default class Enum {
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
        key = key.slice(0);
        key = ensureUppercase(key);
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
