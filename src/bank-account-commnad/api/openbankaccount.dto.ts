import { IsNotEmpty, IsPositive, min, Min } from "class-validator"

export class OpenBankAccountDto{
    @IsNotEmpty()
    accountHolder: string

    @Min(0)
    @IsPositive()
    @IsNotEmpty()
    balance: number

    @IsNotEmpty()
    accountType: string
}