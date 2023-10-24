const chai = require('chai'),
    expect = chai.expect;
const Enum = require('../Enum.cjs');

let counter = 1;

describe(`Enum.cjs`, () => {
    describe('Enum', () => {
        describe(`Constructor`, () => {
            it(`Test ${counter}: Initial Value`, () => {
                const value = ['RED','blue'];
                const color = new Enum(value);

                expect(color.booleans.RED).to.be.true;
            });
            counter++;
        });

        describe(`Class Methods`, () => {
            const values = ['red', 'PUrplE', 'OrAnGe', 'BLUE'];
            const color = new Enum(values);

            it(`Test ${counter}: Enum.addKey(keyString)`, () => {
                expect(color.booleans.RED).to.be.true;
                expect(color.booleans.PURPLE).to.be.false;
                expect(color.booleans.ORANGE).to.be.false;
                expect(color.booleans.BLUE).to.be.false;
            });
            counter++;

            it(`Test ${counter}: Enum.selectKey(string)`, () => {
                color.select('ORANGE');

                expect(color.booleans.RED).to.be.false;
                expect(color.booleans.PURPLE).to.be.false;
                expect(color.booleans.ORANGE).to.be.true;
                expect(color.booleans.BLUE).to.be.false;
            });
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

                expect(color.toString(true)).to.equal(string1);
                expect(color.toString()).to.equal(string2);
                expect(color.toString(false)).to.equal(string2);
            });
            counter++;

            it(`Test ${counter}: Enum.valueOf()`, () => {
                expect(color.valueOf()).to.equal('ORANGE');
            });
            counter++;
        });
    });

    // describe(`Extended Enum`, () => {
    //     describe(`Constructor`, () => {
    //         const colors = new ExtEnum({ red: '#F00' })

    //         it(`Initial key-boolean pair`, () => {
    //             // console.log('colors =', colors)
                
    //         });
    //         counter++;

    //         it(`Initial key-value pair`, () => {
    //             // console.log('colors =', colors.valueOf())
    //             expect(colors.valueOf()).to.equal({RED: '#F00'});
    //         });
    //         counter++;
    //     })

    //     describe(`Class methods`, () => {
    //         it(`SUMMARY`, () => {
    //             // Expectations
    //         })
    //         counter++;

    //     })
    // })
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
