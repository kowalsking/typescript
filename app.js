"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserService {
    constructor() {
        this._users = 1000;
    }
    set users(number) {
        this._users = number;
    }
    get users() {
        return this._users;
    }
    getUsersInDatabase() {
        throw new Error('Errrr');
    }
}
__decorate([
    Log()
], UserService.prototype, "users", null);
function Log() {
    return (target, propertyKey, descriptor) => {
        const set = descriptor.set;
        descriptor.set = (...args) => {
            console.log(args);
            // @ts-ignore
            set === null || set === void 0 ? void 0 : set.apply(target, args);
        };
    };
}
function Catch(rethrow = false) {
    return (target, _, descriptor) => {
        const method = descriptor.value;
        descriptor.value = (...args) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (method === null || method === void 0 ? void 0 : method.apply(target, args));
            }
            catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                    if (rethrow) {
                        throw e;
                    }
                }
            }
        });
    };
}
const us = new UserService();
us.users = 1;
console.log(us.users);
