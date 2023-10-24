// require syntax
// DO NOT work on this file directly. Make changes in the ENUM.mjs file, then copy them over

module.exports = class ENUM {
    constructor(key){
        this.booleans = {};
        key = ensureUppercase(key);

        const ENUM = this.booleans;
        ENUM[key] = true;
    }

    addKey(key){
        const ENUM = this.booleans;
        key = ensureUppercase(key);
        ENUM[key] = false;
    }

    addKeys(keyArray){
        keyArray.forEach( key => {
            this.addKey(key);
        })
    }

    selectKey(key){
        key = ensureUppercase(key);

        const ENUM = this.booleans;

        Object.keys(ENUM).forEach(key => {
            ENUM[key] = false;
        })

        ENUM[key] = true;
    }

    valueOf(){
        const ENUM = this.booleans;
        return Object.keys(ENUM).find(key => ENUM[key])
    }

    toString(fancy=false){
        const ENUM = this.booleans;
        const keyValuePairs = Object.keys(ENUM).map(key => `{${key}: ${ENUM[key]}}` );

        if(fancy){
            return `ENUM {\n    ${keyValuePairs.join(',\n    ')}\n}`;
        } else {
            return `ENUM {${keyValuePairs.join(',')}}`;
        }
    }
}

function ensureUppercase(key) {
    if (typeof key === "string") {
        key = key.toUpperCase();
        return key;
    } else {
        return key;
    }
}