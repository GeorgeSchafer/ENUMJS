// Import syntax
// make changes to this file, then copy them over to the *.module.exports.js file



class ENUM extends Array {

    constructor() { // { 'TYPE': 'boolean' }
        super()
    }

    pushTypes( typeArray ){
        typeArray.forEach( (type) => {
            this.push(type)
        } )
    }

    pushTypeObjs( typeObjs ){
        typeObjs.forEach( (obj) => {
            this.push( new Type(obj) )
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