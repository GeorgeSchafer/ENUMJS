// require syntax
// DO NOT work on this file directly. Make changes in the ENUM.mjs file, then copy them over

/**
 * © 2023 George Schafer george.reflections@gmail.com
 * MIT License
 */


// Utility functions are consolidated here because CommonJS syntax annoys me.
function ensureUppercase(key) {
    if (typeof key === "string") {
        return key.toUpperCase();
    } else {
        return key;
    }
}

function copyString(str){
    return str.substring(0); // This is used to create a copy of the string to prevent the key from being modified prematurely and avoid using the string object wrapper.
}

module.exports = class Enum {
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

