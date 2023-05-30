import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { BankAccountState } from "./bankaccountstate.vo";

@Entity('bankaccount')
export class BankAccountEntity {

    @ObjectIdColumn()
    _id: ObjectID | string

    @Column({
        length: 20
    })
    accountHolder: string

    @Column()
    balance: number

    @Column()
    accountType: string

    @Column({
        type: 'enum',
        enum: BankAccountState,
        enumName: 'BankAccountState',
        default: BankAccountState.ACTIVE,
        nullable: false
    })
    state: BankAccountState = BankAccountState.ACTIVE

    @CreateDateColumn()
    createDate: Date

    @Column({default: Date.now, insert: false, update: true})
    cancelationDate: Date
}