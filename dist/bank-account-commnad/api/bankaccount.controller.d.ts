import { Response } from "express";
import { BankAccountService } from "../domain/bankaccount.service";
import { DepositFoundDto } from "./depositfounds.dto";
import { OpenBankAccountDto } from "./openbankaccount.dto";
export declare class BankAccountController {
    private readonly bankAccountService;
    constructor(bankAccountService: BankAccountService);
    openBankAccount(openbankaccount: OpenBankAccountDto, res: Response): Promise<void>;
    depositFundsAccount(depositFundsDto: DepositFoundDto, res: Response): Promise<void>;
}
