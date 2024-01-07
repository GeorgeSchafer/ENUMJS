/**
 * © 2023 George Schafer george.reflections@gmail.com
 * MIT License
 * 
 * @description
 *      Enum is an Enum implementation for Javascript with an 
 *      optional Extended Enum (ExtEnum) subclass. This file
 *      is every 
 */

class Enum {
    constructor(keyArray){
        this.index = {};

        if(Array.isArray(keyArray)){
            keyArray.forEach(key => {
                this.addKey(key)
            })
            this.select(keyArray[0])
        } else {
            throw new InvalidArrayError(keyArray)
        }
    }

    addKey(key){
        const ENUM = this.index;
        if(typeof key === 'string'){
            key = copyString(key)
            key = ensureUppercase(key)
        }
        ENUM[key] = false;
    }

    addKeys(keyArray){
        keyArray.forEach( key => {
            this.addKey(key)
        })
    }

    select(key){
        key = ensureUppercase(key)

        const ENUM = this.index;

        Object.keys(ENUM).forEach(key => {
            ENUM[key] = false;
        })

        ENUM[key] = true;
    }

    duplicate(){
        const result = {}

        const ENUM = this.index;

        Object.keys(ENUM).forEach(key => {
            ENUM[key] = false;
        })

        ENUM[key] = true;
    }

    valueOf(){
        const ENUM = this.index;
        
        return Object.keys(ENUM).find(key => ENUM[key])
    }

    toString(pretty=false){
        const ENUM = this.index;
        const keyValuePairs = Object.keys(ENUM).map(key => `{${key}: ${ENUM[key]}}` );

        if(pretty){
            return `Enum {\n    ${keyValuePairs.join(',\n    ')}\n}`;
        } else {
            return `Enum {${keyValuePairs.join(',')}}`;
        }
    }
}

class ExtEnum extends Enum {
    constructor(objArray) { // obj = { key: value }

        if(Array.isArray(objArray)){
            const data = splitObjectKeysValues(objArray)
            super(data.keys)
            this.codex = {}
            this.addValues(objArray)
        } else {
            throw new InvalidArrayError()
        }

    }

    addValue(keyValuePair){
        let key = Object.keys(keyValuePair)[0];
        let value = Object.values(keyValuePair)[0];
        key = ensureUppercase(key)
        this.codex[key] = value;
    }

    addValues(keyValuePairArray){
        keyValuePairArray.forEach(pair => {
            this.addValue(pair)
        })
    }

    getCipher(){
        const index = Object.keys(this.index);
        let cipher;
        index.forEach(i => {
            if(this.index[i]){
                cipher = i;
            }
        })

        return cipher;
    }

    valueOf(succinct=false){
        if(succinct){
            return this.codex[this.getCipher()]
        } else {
            const keyValue = {}
            for( const [key, value] of Object.entries(this.codex)){
                if(this.index[key]){
                    keyValue[key] = value;
                }
            }
            return keyValue;
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
        return `ExtEnum ${JSON.stringify(this.valueOf())}`
    }
}

class InvalidArrayError extends Error {
    constructor(invalidArray){
        throw new Error(`Enum declaration expected an array of keys, instead received: ${invalidArray}`)
    }
}

function ensureUppercase(key){
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
        const value = Object.values(obj)[0];
        data.keys.push(key)
        data.values.push(value)
    });

    return data;
}

function copyString(str){
    return str.substring(0);
}

