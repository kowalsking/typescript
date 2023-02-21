"use strict";
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 3, name: 'c' },
    { group: 4, name: 'a' },
];
function group(data, key) {
    const result = {};
    data.forEach(element => {
        var _a;
        const temp = element[key];
        (_a = result[temp]) !== null && _a !== void 0 ? _a : (result[temp] = []);
        result[temp].push(element);
    });
    return result;
}
console.log(group(data, 'name'));
