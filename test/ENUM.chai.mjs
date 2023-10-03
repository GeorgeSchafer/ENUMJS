import ENUM from '../ENUM.mjs'
import {expect, assert} from 'chai'



let counter = 1;

describe(`ENUM.mjs`, () => {
    describe(`Constructor`, () => {
        it(`Test ${counter}: Initial Value`, () => {
            // Expectations
            const value = 'GENUS';
            const en = new ENUM(value)

            expect(en.GENUS).to.be.true;
        })
        counter++;  
    })

    describe(`Class Methods`, () => {
        // Expectations
        const value = 'genus';
        const en = new ENUM(value)

        en.setKey('type')
        en.setKeys(['kind','variety'])

        it(`Test ${counter}: ENUM.setKey(keyString)`, () => {
            expect(en.TYPE).to.be.false;
        })
        counter++;

        it(`Test ${counter}: ENUM.setKeys([strings])`, () => {
            expect(en.KIND).to.be.false;
            expect(en.VARIETY).to.be.false;
        })
        counter++;

        it(`Test ${counter}: ENUM.selectKey(string)`, () => {
            en.selectKey('kind')

            expect(en.GENUS).to.be.false;
            expect(en.TYPE).to.be.false;
            expect(en.KIND).to.be.true;
            expect(en.VARIETY).to.be.false;
        })
        counter++;

        it(`Test ${counter}: ENUM.toString()`, () => {
            console.log(en.toString())
        })
        counter++;
        
        it(`Test ${counter}: ENUM.valueOf()`, () => {
            console.log(en.valueOf())
        })
        counter++;
        
    })

})



/**
describe(`DESCRIPTION`, () => {
    describe(`DESCRIPTION`, () => {
        it(`SUMMARY`, () => {
            // Expectations
        })
        counter++;
        
    })
})

*/
