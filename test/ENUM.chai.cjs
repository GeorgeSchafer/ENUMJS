const chai = require('chai'),
    expect = chai.expect;
const ENUM = require('../ENUM.cjs');
const EENUM = require('../EENUM.cjs');

let counter = 1;

describe(`ENUM.cjs`, () => {
    describe('ENUM', () => {
        describe(`Constructor`, () => {
            it(`Test ${counter}: Initial Value`, () => {
                const value = 'RED';
                const color = new ENUM(value);

                expect(color.RED).to.be.true;
            });
            counter++;
        });

        describe(`Class Methods`, () => {
            const value = 'RED';
            const color = new ENUM(value);

            color.addKey('PUrplE');
            color.addKeys(['OrAnGe', 'BLUE']);

            it(`Test ${counter}: ENUM.addKey(keyString)`, () => {
                expect(color.PURPLE).to.be.false;
            });
            counter++;

            it(`Test ${counter}: ENUM.addKeys([strings])`, () => {
                expect(color.ORANGE).to.be.false;
                expect(color.BLUE).to.be.false;
            });
            counter++;

            it(`Test ${counter}: ENUM.selectKey(string)`, () => {
                color.selectKey('ORANGE');

                expect(color.RED).to.be.false;
                expect(color.PURPLE).to.be.false;
                expect(color.ORANGE).to.be.true;
                expect(color.BLUE).to.be.false;
            });
            counter++;

            it(`Test ${counter}: ENUM.toString()`, () => {
                const string1 =
                    `ENUM {\n` +
                    `    {RED: false},\n` +
                    `    {PURPLE: false},\n` +
                    `    {ORANGE: true},\n` +
                    `    {BLUE: false}\n` +
                    `}`;
                const string2 = `ENUM {{RED: false},{PURPLE: false},{ORANGE: true},{BLUE: false}}`;

                expect(color.toString(true)).to.equal(string1);
                expect(color.toString()).to.equal(string2);
                expect(color.toString(false)).to.equal(string2);
            });
            counter++;

            it(`Test ${counter}: ENUM.valueOf()`, () => {
                expect(color.valueOf()).to.equal('ORANGE');
            });
            counter++;
        });
    });

    describe(`Extended ENUM`, () => {
        describe(`Constructor`, () => {
            const colors = new EENUM({ 'RED': '#F00' })

            it(`Initial key-boolean pair`, () => {
                // Expectations
                console.log('colors =', colors)
                expect(colors.RED).to.be.true;
            });
            counter++;

            it(`Initial key-value pair`, () => {
                // Expectations
                expect(colors.valueOf()).to.equal('#F00');
            });
            counter++;
        })

        describe(`Class methods`, () => {
            it(`SUMMARY`, () => {
                // Expectations
            })
            counter++;

        })
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
