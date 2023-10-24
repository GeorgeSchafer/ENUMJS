
export class InvalidArrayError extends Error {
    constructor(invalidArray){
        throw new Error(`Enum declaration expected an array of keys, instead received: ${invalidArray}`)
    }
}
