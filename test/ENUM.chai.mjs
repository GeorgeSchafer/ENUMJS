import { expect, assert } from "chai";
import { default as Enum, 
         ExtEnum } from "../Enum.mjs";

let counter = 1;

describe(`Enum.mjs`, () => {
    describe('Enum', () => {
        describe(`Constructor`, () => {
            it(`Test ${counter}: Initial Value`, () => {
                const value = ['RED','blue'];
                const color = new Enum(value)

                // Object inside an object instead of a key-value pair
                expect(color.index.RED).to.be.true; 
            })
            counter++;
        })

        describe(`Class Methods`, () => {
            const values = ['red', 'PUrplE', 'OrAnGe', 'BLUE'];
            const color = new Enum(values)

            it(`Test ${counter}: Enum.addKey(keyString)`, () => {
                expect(color.index.RED).to.be.true;
                expect(color.index.PURPLE).to.be.false;
                expect(color.index.ORANGE).to.be.false;
                expect(color.index.BLUE).to.be.false;
            })
            counter++;

            it(`Test ${counter}: Enum.selectKey(string)`, () => {
                color.select('ORANGE')

                expect(color.index.RED).to.be.false;
                expect(color.index.PURPLE).to.be.false;
                expect(color.index.ORANGE).to.be.true;
                expect(color.index.BLUE).to.be.false;
            })
            counter++;

            it(`Test ${counter}: Enum.toString()`, () => {
                const string1 =
                    `Enum {\n` +
                    `    {RED: false},\n` +
                    `    {PURPLE: false},\n` +
                    `    {ORANGE: true},\n` +
                    `    {BLUE: false}\n` +
                    `}`;
                const string2 = `Enum {{RED: false},{PURPLE: false},{ORANGE: true},{BLUE: false}}`;

                expect(color.toString(true)).to.equal(string1)
                expect(color.toString()).to.equal(string2)
                expect(color.toString(false)).to.equal(string2)
            })
            counter++;

            it(`Test ${counter}: Enum.valueOf()`, () => {
                expect(color.valueOf()).to.equal('ORANGE')
            })
            counter++;
        })
    })


    describe(`Extended Enum`, () => {
        describe(`Constructor`, () => {
            const color = new ExtEnum([{ red: '#f00' }, {blue: '#0f0'}, {green: '#00f'}])

            it(`Test ${counter}: returns valueOf(succinct)`, () => {
                expect(color.valueOf(true)).to.eql('#f00')
                expect(color.valueOf(true)).to.not.eql('#00f')
            })
            counter++;

            it(`Test ${counter}: select()`, () => {
                color.select('green')
                expect(color.valueOf(true)).to.not.eql('#f00')
                expect(color.valueOf(true)).to.eql('#00f')
            })
            counter++;

            it(`Test ${counter}: Initial key-value pair`, () => {
                color.select('red')
                expect(color.valueOf()).to.eql({RED: '#f00'})
                expect(color.valueOf()).to.not.eql({BLUE: '#0f0'})
                expect(color.valueOf()).to.not.eql({GREEN: '#00f'})
            })
            counter++;

            it(`Test ${counter}: Selected key-value pair`, () => {
                color.select('blue')
                expect(color.valueOf()).to.eql({BLUE: '#0f0'})
                expect(color.valueOf()).to.not.eql({RED: '#f00'})
                expect(color.valueOf()).to.not.eql({GREEN: '#00f'})
            })
            counter++;
        })

    })
})

/**
describe(`DESCRIPTION`, () => {
    describe(`DESCRIPTION`, () => {
        it(`Test ${counter}: SUMMARY`, () => {
            // Expectations
        })
        counter++;

    })
})

*/
