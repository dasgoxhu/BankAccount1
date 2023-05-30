import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountController } from './api/bankaccount.controller';
import { BankAccountEntity } from './domain/bankaccount.entity';
import { BankAccountServiceImpl } from './domain/services/bankaccount.serviceimpl';
import { BankAccountRepositoryImpl } from './infrastructure/bankaccount.repositoryimpl';

@Module({
    imports: [
        TypeOrmModule.forFeature([BankAccountEntity])
    ],
    providers: [
        {
            provide: 'BankAccountRepository',
            useClass: BankAccountRepositoryImpl
        },
        {
            provide: 'BankAccountService',
            useClass: BankAccountServiceImpl
        }
    ],
    controllers: [
        BankAccountController
    ]
})
export class BankAccountCommnadModule { }
