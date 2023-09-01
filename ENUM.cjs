// require syntax
// DO NOT work on this file directly. Make changes in the export.js file, then copy them over



module.exports = class ENUM {

    constructor( keyStr, value ) { // { 'genus': boolean }
        this[keyStr] = value;
    }

    addKey( keyStr ){
        this[keyStr] = false;
    }

    addKeys( keyStrArray ){
        keyStrArray.forEach( (string) => {
            this[string] = false;
        } )
    }

    addKeyValue( keyStr, value ){
        this[keyStr] = value;
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
