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
        this.index = {};

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
        const ENUM = this.index;
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

        const ENUM = this.index;

        Object.keys(ENUM).forEach(key => {
            ENUM[key] = false;
        });

        ENUM[key] = true;
    }

    valueOf(){
        const ENUM = this.index;
        
        return Object.keys(ENUM).find(key => ENUM[key]);
    }

    toString(fancy=false){
        const ENUM = this.index;
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
             *      Find the true key in this.index
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
     * Colors is an Extended Enum with key-value pairs index 
     *      hold the key that has the value as the true value
     *      codex needs the key:value
     */
    valueOf(){ // Problem SOLVED
        const index = this.index; // an array of {key: boolean} objects
        const keys = Object.keys(index) // 
        const codex = this.codex;    // an object of key:value pairs

        for( let i = 0 ; i < keys.length ; i++){
            const cipher = keys[i]
            if(index[cipher]){
                return codex[cipher]
            }
        }
        
    }

    keyValueOf(){
        const index = this.index;
        const keys = Object.keys(index)
        const codex = this.codex;
        let pair = {}

        for( let i = 0 ; i < keys.length ; i++ ){
            const cipher = keys[i]

            if(index[cipher]){
                pair[cipher] = codex[cipher];
                return pair ;
            }
        }
    }

    toString(){
        const cipher = Object.keys(this.keyValueOf())[0];

        return `ExtEnum { ${ cipher }: '${ this.codex[cipher] }' }`
    }
}
