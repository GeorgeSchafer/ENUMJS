// require syntax
// DO NOT work on this file directly. Make changes in the export.js file, then copy them over



class ENUM extends Array {

    constructor( typeObj ) { // { 'TYPE': 'boolean' }
        super().push(typeObj)
    }

    pushTypes( typeArray ){
        typeArray.forEach( (type) => {
            this.push(type)
        } )
    }

}


class Type {
    constructor( obj ){ // obj = { 'TYPE': boolean }
        const key = Object.keys(obj)[0]
        this[key] = Object.values(obj)[0]
    }
}



module.exports = {
    ENUM,
    Type
}