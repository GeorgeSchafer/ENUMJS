// Import syntax
// make changes to this file, then copy them over to the ENUMJS.cjs file

export default class ENUM {
  constructor(key) {
    this[ensureUppercase(key)] = true;
  }

  addKey(key) {
    this[ensureUppercase(key)] = false;
  }

  addKeys(keyArray) {
    keyArray.forEach((key) => {
      this[ensureUppercase(key)] = false;
    });
  }

  selectKey(key) {
    const keys = Object.keys(this);
    key = ensureUppercase(key);

    if (typeof key === 'boolean') {
      throw new Error("InvalidKey Error: specified key is not present");
    } else {
      keys.forEach((element) => {
        this[element] = false;
      });

      this[key] = true;
    }
  }

  toString(fancy = false) {
    const keyValuePairs = Object.keys(this).map(
      (key) => `{${key}: ${this[key]}}`
    );
    if (fancy) {
      return `ENUM {\n    ${keyValuePairs.join(",\n    ")}\n}`;
    } else {
      return `ENUM {${keyValuePairs.join(",")}}`;
    }
  }

  valueOf() {
    return Object.keys(this).find((key) => this[key]);
  }
}

function ensureUppercase(key) {
  if (typeof key == "string") {
    key = key.toUpperCase();
  }
  return key;
}
