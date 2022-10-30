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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    convertToUser(createUser) {
        const user = new user_entity_1.User();
        const today = new Date();
        user.telephone = createUser.telephone;
        user.password = createUser.password;
        user.firstName = createUser.firstName;
        user.lastName = createUser.lastName;
        user.email = createUser.email;
        user.createdAt = today.toISOString();
        user.updatedAt = null;
        user.fromDate = null;
        user.untilDate = null;
        return user;
    }
    findAll() {
        return this.users;
    }
    findOne(email) {
        const usr = this.users.filter(usr => usr.email == email);
        return usr[0] ? usr[0] : null;
    }
    create(createUser) {
        const user = this.convertToUser(createUser);
        this.users.push(user);
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map