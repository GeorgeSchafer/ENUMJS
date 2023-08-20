// require syntax
// DO NOT work on this file directly. Make changes in the export.js file, then copy them over



class ENUM extends Array {

    constructor() { // { 'genus': 'boolean' }
        super()
    }

    pushGeni( genusArray ){
        genusArray.forEach( (genus) => {
            this.push(genus)
        } )
    }

    pushGeniObjs( genusObjs ){
        genusObjs.forEach( (obj) => {
            this.push( new Genus(obj) )
        } )
    }

}



class Genus {
    constructor( obj ){ // obj = { 'genus': boolean }
        const key = Object.keys(obj)[0]
        this[key] = Object.values(obj)[0]
    }
}



module.exports = {
    ENUM,
    Genus
}
