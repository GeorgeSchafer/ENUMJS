// require syntax
// DO NOT work on this file directly. Make changes in the export.js file, then copy them over



class ENUM extends Array {

    constructor( typeObj ) { // { 'TYPE': BOOLEAN }
        super().push(typeObj)
    }

    pushTypes( typeArray ){
        typeArray.forEach( (type) => {
            this.push(type)
        } )
    }

}


class Type {
    constructor( obj ){ // obj = { 'TYPE': BOOLEAN }
        const key = Object.keys(obj)
        this[key] = Object.values(obj)
    }
}



module.exports = {
    ENUM,
    Type
}