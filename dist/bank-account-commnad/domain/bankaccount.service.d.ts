import { DepositFoundDto } from "../api/depositfounds.dto";
import { OpenBankAccountDto } from "../api/openbankaccount.dto";
export interface BankAccountService {
    openAccountCommand(openBankAccount: OpenBankAccountDto): Promise<void>;
    depositFundsCommand(depositFunds: DepositFoundDto): Promise<void>;
    closeAccountCommnad(): Promise<void>;
    withdrawFundsCommnad(): Promise<void>;
}
