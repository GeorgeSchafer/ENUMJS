// require syntax
// DO NOT work on this file directly. Make changes in the export.js file, then copy them over



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



// module.exports = 
class Genus {
    constructor( obj ){ // obj = { 'genus': boolean }
        const key = Object.keys(obj)[0]
        this[key] = obj[key]
        
    }
}

module.exports = {ENUM, Genus}
