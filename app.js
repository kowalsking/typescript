"use strict";
const data = [
    { id: 1, name: 'One' },
    { id: 3, name: 'Two' },
    { id: 2, name: 'Three' },
];
function filterArr(arr, to = 'up') {
    if (to === 'up') {
        return arr.sort((a, b) => a.id - b.id);
    }
    return arr.sort((a, b) => b.id - a.id);
}
console.log(filterArr(data, 'up'));
console.log(filterArr(data, 'down'));
