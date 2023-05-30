import { ObjectID } from "typeorm";
import { BankAccountState } from "./bankaccountstate.vo";
export declare class BankAccountEntity {
    _id: ObjectID | string;
    accountHolder: string;
    balance: number;
    accountType: string;
    state: BankAccountState;
    createDate: Date;
    cancelationDate: Date;
}
