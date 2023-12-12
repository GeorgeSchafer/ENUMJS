
/**
 * @todo 
 *      Fix so that the utility functions get exported via commonJS syntax
 */

module.exports = function ensureUppercase(key) {
    if (typeof key === "string") {
        return key.toUpperCase();
    } else {
        return key;
    }
};

module.exports = function copyString(str){
    return str.substring(0); // This is used to create a copy of the string to prevent the key from being modified prematurely and avoid using the string object wrapper.
};

module.exports = function splitObjectKeysValues(objArray){
    const data = {
        keys : [],
        values : []
    };

    objArray.forEach(obj => {
        const key = Object.keys(obj)[0];
        data.keys.push(key)
        data.values.push(obj.key)
    });

    return data;
};
