import { DepositFoundDto } from '../api/depositfounds.dto';
import { OpenBankAccountDto } from '../api/openbankaccount.dto';
import { BankAccountRepository } from './bankaccount.repository';
import { BankAccountService } from './bankaccount.service';
export declare class BankAccountServiceImpl implements BankAccountService {
    private readonly bankaccountRepository;
    constructor(bankaccountRepository: BankAccountRepository);
    openAccountCommand(openBankAccount: OpenBankAccountDto): Promise<void>;
    depositFundsCommand(depositFunds: DepositFoundDto): Promise<void>;
    closeAccountCommnad(): Promise<void>;
    withdrawFundsCommnad(): Promise<void>;
}
