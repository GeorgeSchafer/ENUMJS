// Import syntax
// make changes to this file, then copy them over to the *.module.exports.js file


export class ENUM {
    constructor() {
        this.types = []
    }

    push( type ){
        this.types.push(type)
    }

}

export class Type {

    constructor( obj ){ // obj = { type: "boolean" }
        this.type = obj;
    }

}
