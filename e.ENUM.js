// Import syntax
// make changes to this file, then copy them over to the *.module.exports.js file



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

export { ENUM, Type }