import { MongoRepository } from "typeorm";
import { BankAccountEntity } from "../domain/bankaccount.entity";
import { BankAccountRepository } from "../domain/bankaccount.repository";
export declare class BankAccountRepositoryImpl implements BankAccountRepository {
    private readonly typeOrmRepository;
    constructor(typeOrmRepository: MongoRepository<BankAccountEntity>);
    openAccountCommand(bankaccount: BankAccountEntity): Promise<void>;
    depositFundsCommand(bankaccount: BankAccountEntity): Promise<void>;
    closeAccountCommnad(): Promise<void>;
    withdrawFundsCommnad(): Promise<void>;
    findById(id: string): Promise<BankAccountEntity>;
}
