import { expect, assert } from "chai";
import { Enum, ExtEnum } from "../Enum.mjs";

let counter = 1;

describe(`Enum.mjs`, () => {
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

    describe(`Extended Enum`, () => {
        describe(`Constructor`, () => {
            const colors = new ExtEnum([{ red: '#f00' }, {blue: '#0f0'}, {green: '#00f'}])

            it(`Test ${counter}: Initial key-value pair`, () => {
                expect(colors.valueOf()).to.eql({RED: '#f00'});
            });
            counter++;


            it(`Test ${counter}: Selected key-value pair`, () => {
                colors.select('blue');

                expect(colors.valueOf()).to.eql({BLUE: '#0f0'})    
            });
            counter++;
            console.log('colors.valueOf()', colors.valueOf())

        })

        describe(`Class methods`, () => {
            it(`SUMMARY`, () => {
                // Expectations
            })
            counter++;

        })

        describe(`Extended Enum Subclass`, ()  => {
            it(`SUMMARY`, () => {
                // Expectations
                const types = [
                    { ARRAY: {'type': 'array'} },
                    { BOOLEAN: {'type': 'boolean'} },
                    { FLOAT: {'type': 'float'} },
                    { INTEGER: {'type': 'integer'} },
                    { NUMBER: {'type': 'number'} },
                    { NULL: {'type': 'null'} },
                    { OBJECT: {'type': 'object'} },
                    { STRING: {'type': 'string'} }
                ]

                class SchemaType extends ExtEnum{
                    constructor(keyValueArray){
                        super(keyValueArray)
                    }
                }

                const array = new SchemaType(types)
                const boolean = new SchemaType(types)
                const float = new SchemaType(types)
                const integer = new SchemaType(types)
                const number = new SchemaType(types)
                const nulled = new SchemaType(types)
                const object = new SchemaType(types)
                const string = new SchemaType(types)

                array.select('array')
                boolean.select('boolean')
                float.select('float')
                integer.select('integer')
                number.select('number')
                nulled.select('null')
                object.select('object')
                string.select('string')

                expect(array.toString()).to.eql(`Enum {{ARRAY: true},{BOOLEAN: false},{FLOAT: false},{INTEGER: false},{NUMBER: false},{NULL: false},{OBJECT: false},{STRING: false}}`)
                // console.log('array:', array.toString(true))
                expect(array.toString(true)).to.eql(
                    `Enum {` +
                    `    {ARRAY: true},` + 
                    `    {BOOLEAN: false},` +
                    `    {FLOAT: false},` +
                    `    {INTEGER: false},` +
                    `    {NUMBER: false},` +
                    `    {NULL: false},` +
                    `    {OBJECT: false},` +
                    `    {STRING: false}` +
                    `}`
                )
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
