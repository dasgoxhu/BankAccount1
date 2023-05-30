import { Inject, Injectable } from '@nestjs/common';
import { DepositFoundDto } from '../../api/depositfounds.dto';
import { OpenBankAccountDto } from '../../api/openbankaccount.dto';
import { BankAccountEntity } from '../bankaccount.entity';
import { BankAccountRepository } from '../repositories/bankaccount.repository';
import { BankAccountService } from './bankaccount.service';
import { BankAccountState } from '../bankaccountstate.vo';

@Injectable()
export class BankAccountServiceImpl implements BankAccountService {

    constructor(
        @Inject('BankAccountRepository')
        private readonly bankaccountRepository : BankAccountRepository
    ){}
    
    openAccountCommand(openBankAccount: OpenBankAccountDto): Promise<void> {
        return new Promise((resolve, reject) => {
            let accountEntity = new BankAccountEntity();
            accountEntity.accountHolder = openBankAccount.accountHolder
            accountEntity.balance = openBankAccount.balance
            accountEntity.accountType = openBankAccount.accountType

            this.bankaccountRepository.openAccountCommand(accountEntity)
            resolve()
        });
    }

    async depositFundsCommand(depositFunds: DepositFoundDto): Promise<void> {
        let account = await this.bankaccountRepository.findById(depositFunds.id);

        if(!account){
            throw new Error("La cuenta destino no Existe!");
        }

        if(account.state != BankAccountState.ACTIVE){
            throw new Error("La cuenta destino no esta Activa!")
        }

        account.balance += depositFunds.founds;

        return this.bankaccountRepository.depositFundsCommand(account);
           
    }
    closeAccountCommnad(id:String): Promise<void> {
        throw new Error('Method not implemented.');
    }
    withdrawFundsCommnad(): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
