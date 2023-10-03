// require syntax
// DO NOT work on this file directly. Make changes in the ENUM.mjs file, then copy them over



module.exports = class ENUM {

    constructor( keyStr ) { // { 'genus': boolean }
        this[keyStr.toUpperCase()] = true;
    }

    setKey( keyStr ){
        this[keyStr.toUpperCase()] = false;
    }

    setKeys( keyStrArray ){
        keyStrArray.forEach( (string) => {
            this[string.toUpperCase()] = false;
        } )
    }

    selectKey( keyStr ){
        const keys = Object.keys(this)
        keyStr = keyStr.toUpperCase()

        if(this[keyStr] != true && this[keyStr] != false){
            throw new Error("InvalidKey Error: specified key is not present")
        } else {
            keys.forEach( (key) => {
                this[key] = false;
            } )

            this[keyStr] = true;
        }
    }

    toString(){
        const keys = Object.keys(this)
        let result = '';
        let index = 0;
        let length = keys.length;

        keys.forEach((key, index) => {
            if(index === 0){
                result += `ENUM {\n    {${key}: ${this[key]}},\n`;
            } else if(index >= keys.length - 1){
                result += `    {${key}: ${this[key]}}\n}`;
                return result;
            } else {
                result += `    {${key}: ${this[key]}},\n`;
            }
            
            index++;
        })

        return result;
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
