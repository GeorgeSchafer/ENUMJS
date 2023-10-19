// Import syntax
// make changes to this file, then copy them over to the ENUMJS.cjs file




export default class ENUM {

    constructor( key ) { 
        this[filter(key)] = true;
    }

    setKey( key ){
        this[filter(key)] = false;
    }

    setKeys( keyArray ){
        keyArray.forEach( (key) => {
            this[filter(key)] = false;
        } )
    }

    selectKey( key ){
        const keys = Object.keys(this)
        key = filter(key)

        if(this[key] != true && this[key] != false){
            throw new Error("InvalidKey Error: specified key is not present")
        } else {
            keys.forEach( (element) => {
                this[element] = false;
            } )

            this[key] = true;
        }
    }

    toString() {
        const keyValuePairs = Object.keys(this).map(key => `{${key}: ${this[key]}}`);
        return `ENUM {\n    ${keyValuePairs.join(',\n    ')}\n}`;
    }

    valueOf(){
        let array = Object.keys(this);
        for( let i = 0 ; i < array.length ; i++ ){
            if(this[array[i]]){
                return array[i];
            }
        }
    }

}

function filter(key){
    if(typeof key == 'string'){
        key = key.toUpperCase()
    }
    return key;
}
