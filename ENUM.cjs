// require syntax
// DO NOT work on this file directly. Make changes in the export.js file, then copy them over



module.exports = class ENUM {

    constructor( keyStr ) {
        this[keyStr] = true;
    }

    setKey( keyStr ){
        this[keyStr] = false;
    }

    setKeys( keyStrArray ){
        keyStrArray.forEach( (string) => {
            this[string] = false;
        } )
    }

    selectKey( keyStr ){
        const keys = Object.keys(this);

        if(this[keyStr] === false || this[keyStr] === true){
            keys.forEach( (key) => {
                this[key] = false;
            } )
        } else {
            throw new Error("InvalidKey Error: specified key is not present")
        }

        this[keyStr] = true;
        
        
    }

    toString(){
        let result;
        const keys = Object.keys(this)

        keys.forEach(key => {
            result += ` { ${key}: ${this[key]} } `
        })
        
        return result;
    }

}
