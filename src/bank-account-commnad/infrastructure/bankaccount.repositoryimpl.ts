import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import { BankAccountEntity } from "../domain/bankaccount.entity";
import { BankAccountRepository } from "../domain/repositories/bankaccount.repository";

@Injectable()
export class BankAccountRepositoryImpl implements BankAccountRepository {

    constructor(
        @InjectRepository(BankAccountEntity)
        private readonly typeOrmRepository: MongoRepository<BankAccountEntity>
    ) { }

    openAccountCommand(bankaccount: BankAccountEntity): Promise<void> {
        return new Promise((resolve, reject) => {
            let newAccount = this.typeOrmRepository.create(bankaccount)
            this.typeOrmRepository.save(newAccount)
            resolve()
        });
    }
    depositFundsCommand(bankaccount: BankAccountEntity): Promise<void> {
        return new Promise((resolve, reject) => {
            this.typeOrmRepository
                .update(bankaccount._id,bankaccount)
            resolve();
        });
    }
    closeAccountCommnad(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    withdrawFundsCommnad(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Promise<BankAccountEntity> {
        return new Promise((resolve, reject) => {
            resolve(this.typeOrmRepository.findOne({
                where: {
                    _id: new ObjectID(id)
                }
            }));
        })
    }
}