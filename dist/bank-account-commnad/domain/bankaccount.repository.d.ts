import { BankAccountEntity } from "./bankaccount.entity";
export interface BankAccountRepository {
    openAccountCommand(bankaccount: BankAccountEntity): Promise<void>;
    depositFundsCommand(bankaccount: BankAccountEntity): Promise<void>;
    closeAccountCommnad(): Promise<void>;
    withdrawFundsCommnad(): Promise<void>;
    findById(id: String): Promise<BankAccountEntity>;
}
