"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountCommnadModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bankaccount_controller_1 = require("./api/bankaccount.controller");
const bankaccount_entity_1 = require("./domain/bankaccount.entity");
const bankaccount_serviceimpl_1 = require("./domain/bankaccount.serviceimpl");
const bankaccount_repositoryimpl_1 = require("./infrastructure/bankaccount.repositoryimpl");
let BankAccountCommnadModule = class BankAccountCommnadModule {
};
BankAccountCommnadModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([bankaccount_entity_1.BankAccountEntity])
        ],
        providers: [
            {
                provide: 'BankAccountRepository',
                useClass: bankaccount_repositoryimpl_1.BankAccountRepositoryImpl
            },
            {
                provide: 'BankAccountService',
                useClass: bankaccount_serviceimpl_1.BankAccountServiceImpl
            }
        ],
        controllers: [
            bankaccount_controller_1.BankAccountController
        ]
    })
], BankAccountCommnadModule);
exports.BankAccountCommnadModule = BankAccountCommnadModule;
//# sourceMappingURL=bank-account-commnad.module.js.map