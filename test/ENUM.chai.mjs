import { expect, assert } from "chai";
import { default as Enum, 
         ExtEnum } from "../Enum.mjs";
import { ensureUppercase } from "../Utilities.mjs";

let counter = '1';

describe(`Enum.mjs`, () => {
    describe('Enum', () => {
        describe(`Constructor`, () => {
            it(`Test ${counter}: Initial Value`, () => {
                let value = ['RED','blue']
                const color = new Enum(value)
                value[1] = ensureUppercase(value[1])

                // Object inside an object instead of a key-value pair
                expect(color.booleans.RED).to.be.true;
                expect(Object.keys(color.booleans)).to.eql(value)
            });
            counter++;
        });

        describe(`Class Methods`, () => {
            let values = ['red', 'PUrplE', 'OrAnGe', 'BLUE'];
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
});

counter = 1;

describe(`Extended Enum`, () => {
    describe(`Extended Enum`, () => {
        describe(`Constructor`, () => {
            const rgb = new ExtEnum([{ red: '#f00' }, {blue: '#0f0'}, {green: '#00f'}])
    
            it(`Test ${counter}: Initial value`, () => {
                expect(rgb.valueOf()).to.eql('#f00')
            });
            counter++;

            it(`Test ${counter}: Initial Key:Value object`, () => {
                expect(rgb.keyValueOf()).to.eql({RED: '#f00'})
            })
            counter++;
            
            it(`Test ${counter}: Selected value`, () => {
                rgb.select('blue')
                expect(rgb.valueOf()).to.eql('#0f0')    
            });
            counter++;

            it(`Test ${counter}: Selected Key:Value object`, () => {
                rgb.select('blue')
                expect(rgb.keyValueOf()).to.eql({BLUE: '#0f0'})
            })
            counter++;

        })

        // describe(`Class methods`, () => {
        //     it(`addValue`, () => {
        //         // Expectations
        //         const types = [ { OBJECT: {'type': 'object'} } ]
        //         const str = { STRING: {'type': 'string'} }
        //         const dataSchema = new ExtEnum(types)
        //         dataSchema.addValue(str)
        //         dataSchema.select('STRING')

        //         expect(dataSchema.valueOf()).to.be.eql({type: 'string'});

        //     })
        //     counter++;

        // })
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
