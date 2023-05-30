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
exports.BankAccountController = void 0;
const common_1 = require("@nestjs/common");
const depositfounds_dto_1 = require("./depositfounds.dto");
const openbankaccount_dto_1 = require("./openbankaccount.dto");
let BankAccountController = class BankAccountController {
    constructor(bankAccountService) {
        this.bankAccountService = bankAccountService;
    }
    async openBankAccount(openbankaccount, res) {
        await this.bankAccountService.openAccountCommand(openbankaccount);
        res.status(201).send("Cuenta registrada con exito!");
    }
    async depositFundsAccount(depositFundsDto, res) {
        try {
            await this.bankAccountService.depositFundsCommand(depositFundsDto);
            res.status(200).send("Deposito realizado con Exito!");
        }
        catch (error) {
            console.log(error);
            res.status(500).send("Error al depositar!");
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [openbankaccount_dto_1.OpenBankAccountDto, Object]),
    __metadata("design:returntype", Promise)
], BankAccountController.prototype, "openBankAccount", null);
__decorate([
    (0, common_1.Put)("/depositfounds"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [depositfounds_dto_1.DepositFoundDto, Object]),
    __metadata("design:returntype", Promise)
], BankAccountController.prototype, "depositFundsAccount", null);
BankAccountController = __decorate([
    (0, common_1.Controller)("bankaccount"),
    __param(0, (0, common_1.Inject)('BankAccountService')),
    __metadata("design:paramtypes", [Object])
], BankAccountController);
exports.BankAccountController = BankAccountController;
//# sourceMappingURL=bankaccount.controller.js.map