// require syntax
// DO NOT work on this file directly. Make changes in the export.js file, then copy them over



module.exports = class ENUM {

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

        if(this[keyStr] === false || this[keyStr] === true){
            keys.forEach( (key) => {
                this[key] = false;
            } )
        } else {
            throw new Error("InvalidKey Error: specified key is not present")
        }

        this[keyStr] = true;
        
        
    }

    // pushGeni( genusArray ){
    //     genusArray.forEach( (genus) => {
    //         this.push(genus)
    //     } )
    // }

    // pushGenusObj( obj ){
    //     this.push( new Genus(obj) )
    // }

}

/** 
* @todo determine if Genus is necessary
*/
// class Genus {
//     constructor( obj ){ // obj = { 'genus': boolean }
//         const key = Object.keys(obj)[0]
//         this[key] = obj[key]
        
//     }
// }
