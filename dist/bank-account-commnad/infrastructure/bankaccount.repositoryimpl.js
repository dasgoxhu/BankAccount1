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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mongodb_1 = require("mongodb");
const bankaccount_entity_1 = require("../domain/bankaccount.entity");
let BankAccountRepositoryImpl = class BankAccountRepositoryImpl {
    constructor(typeOrmRepository) {
        this.typeOrmRepository = typeOrmRepository;
    }
    openAccountCommand(bankaccount) {
        return new Promise((resolve, reject) => {
            let newAccount = this.typeOrmRepository.create(bankaccount);
            this.typeOrmRepository.save(newAccount);
            resolve();
        });
    }
    depositFundsCommand(bankaccount) {
        return new Promise((resolve, reject) => {
            this.typeOrmRepository
                .update(bankaccount._id, bankaccount);
            resolve();
        });
    }
    closeAccountCommnad() {
        throw new Error("Method not implemented.");
    }
    withdrawFundsCommnad() {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            resolve(this.typeOrmRepository.findOne({
                where: {
                    _id: new mongodb_1.ObjectID(id)
                }
            }));
        });
    }
};
BankAccountRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bankaccount_entity_1.BankAccountEntity)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], BankAccountRepositoryImpl);
exports.BankAccountRepositoryImpl = BankAccountRepositoryImpl;
//# sourceMappingURL=bankaccount.repositoryimpl.js.map