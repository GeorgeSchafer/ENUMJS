// Import syntax
// make changes to this file, then copy them over to the *.module.exports.js file



class ENUM extends Array {

    constructor() { // { 'GENUS': 'boolean' }
        super()
    }

    pushGeni( genusArray ){
        genusArray.forEach( (genus) => {
            this.push(genus)
        } )
    }

    pushGenusObj( obj ){
        this.push( new Genus(obj) )
    }

}



class Type {
    constructor( obj ){ // obj = { 'genus': boolean }
        const key = Object.keys(obj)[0]
        this[key] = obj[key]   
    }
}



export { ENUM as default, Type }