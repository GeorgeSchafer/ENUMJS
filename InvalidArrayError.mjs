/**
 * © 2023 George Schafer george.reflections@gmail.com
 * MIT License
 */

export class InvalidArrayError extends Error {
    constructor(invalidArray){
        throw new Error(`Enum declaration expected an array of keys, instead received: ${invalidArray}`)
    }
}
