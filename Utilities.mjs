
export function ensureUppercase(key) {
    if (typeof key === "string") {
        return key.toUpperCase();
    } else {
        return key;
    }
}
