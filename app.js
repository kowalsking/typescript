"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Uni(name) {
    console.log('Initialization: ' + name);
    return function () {
        console.log('Invoke: ' + name);
    };
}
let C = class C {
    static smethod(a) { }
    method(a) { }
    constructor(a) {
    }
};
__decorate([
    Uni('Property'),
    __metadata("design:type", Object)
], C.prototype, "props", void 0);
__decorate([
    Uni('Method'),
    __param(0, Uni('Parameter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], C.prototype, "method", null);
__decorate([
    Uni('Static Property'),
    __metadata("design:type", Object)
], C, "prop", void 0);
__decorate([
    Uni('Static Method'),
    __param(0, Uni('Static Parameter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], C, "smethod", null);
C = __decorate([
    Uni('Class'),
    __param(0, Uni('Constructor Parameter')),
    __metadata("design:paramtypes", [Object])
], C);
/**
 * Initialization: Property
Invoke: Property
Initialization: Method
Initialization: Parameter
Invoke: Parameter
Invoke: Method
Initialization: Static Property
Invoke: Static Property
Initialization: Static Method
Initialization: Static Parameter
Invoke: Static Parameter
Invoke: Static Method
Initialization: Class
Initialization: Constructor Parameter
Invoke: Constructor Parameter
Invoke: Class
 */ 
