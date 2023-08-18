// export syntax
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

    constructor( obj ){ // objType = { type: boolean } || { property }
        this.type = obj.property;
        this.value = false;

        obj.value === undefined
            ? this.value = false
            : this.value = object.value
   
    }

}
