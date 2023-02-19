"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
const list = ExtendedList(List);
const result = new list(['1', '2']);
console.log(result.first());
