import { expect, assert } from "chai";
import ENUM from "../ENUM.mjs";

let counter = 1;

describe(`ENUM.mjs`, () => {
  describe(`Constructor`, () => {
    it(`Test ${counter}: Initial Value`, () => {
      const value = "GENUS";
      const en = new ENUM(value);

      expect(en.GENUS).to.be.true;
    });
    counter++;
  });

  describe(`Class Methods`, () => {
    const value = "genus";
    const en = new ENUM(value);

    en.addKey("type");
    en.addKeys(["kInD", "VARIETY"]);

    it(`Test ${counter}: ENUM.addKey(keyString)`, () => {
      expect(en.TYPE).to.be.false;
    });
    counter++;

    it(`Test ${counter}: ENUM.addKeys([strings])`, () => {
      expect(en.KIND).to.be.false;
      expect(en.VARIETY).to.be.false;
    });
    counter++;

    it(`Test ${counter}: ENUM.selectKey(string)`, () => {
      en.selectKey("kind");

      expect(en.GENUS).to.be.false;
      expect(en.TYPE).to.be.false;
      expect(en.KIND).to.be.true;
      expect(en.VARIETY).to.be.false;
    });
    counter++;

    it(`Test ${counter}: ENUM.toString()`, () => {
      const string1 =
        `ENUM {\n` +
        `    {GENUS: false},\n` +
        `    {TYPE: false},\n` +
        `    {KIND: true},\n` +
        `    {VARIETY: false}\n` +
        `}`;
      const string2 = `ENUM {{GENUS: false},{TYPE: false},{KIND: true},{VARIETY: false}}`;

      expect(en.toString(true)).to.equal(string1);
      expect(en.toString()).to.equal(string2);
      expect(en.toString(false)).to.equal(string2);
    });
    counter++;

    it(`Test ${counter}: ENUM.valueOf()`, () => {
      expect(en.valueOf()).to.equal("KIND");
    });
    counter++;
  });
});

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
