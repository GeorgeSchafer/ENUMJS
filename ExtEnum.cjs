

// Utility functions are consolidated here because CommonJS syntax annoys me.

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
    return str.substring(0); // This is used to create a copy of the string to prevent the key from being modified prematurely and avoid using the string object wrapper.
}


module.exports = class ExtEnum extends Enum {
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
}