// Import syntax
// make changes to this file, then copy them over to the *.module.exports.js file



export default class ENUM {

    constructor( keyStr ) { // { 'genus': boolean }
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

        if(this[keyStr] != true && this[keyStr] != false){
            throw new Error("InvalidKey Error: specified key is not present")
        } else {
            keys.forEach( (key) => {
                this[key] = false;
            } )

            this[keyStr] = true;
        }

        /** 
        * @todo
        *     Ensure the refactor above works to replace the old code below.
        */
        // if(this[keyStr] === false || this[keyStr] === true){
        //     keys.forEach( (key) => {
        //         this[key] = false;
        //     } )
        // } else {
        //     throw new Error("InvalidKey Error: specified key is not present")
        // }

        
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
