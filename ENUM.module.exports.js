// module.exports


class ENUM {
    constructor() {
        this.types = []
    }

    push( type ){
        this.types.push(type)
    }

}

class Type {

    constructor( obj ){ // objType = { type: boolean } || { property }
        this.type = obj.property;
        this.value = false;

        obj.value === undefined
            ? this.value = false
            : this.value = object.value
   
    }

}

module.exports = ENUM;
module.exports = Type;