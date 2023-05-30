import { Body, Controller, Inject, Post, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { BankAccountService } from "../domain/bankaccount.service";
import { DepositFoundDto } from "./depositfounds.dto";
import { OpenBankAccountDto } from "./openbankaccount.dto";

@Controller("bankaccount")
export class BankAccountController {

    constructor(
        @Inject('BankAccountService')
        private readonly bankAccountService: BankAccountService
    ) { }

    @Post()
    public async openBankAccount(@Body() openbankaccount: OpenBankAccountDto,
        @Res() res: Response) {

        await this.bankAccountService.openAccountCommand(openbankaccount)
        res.status(201).send("Cuenta registrada con exito!");
    }

    @Put("/depositfounds")
    public async depositFundsAccount(@Body() depositFundsDto: DepositFoundDto,
        @Res() res: Response) {

        try {
            await this.bankAccountService.depositFundsCommand(depositFundsDto);
            res.status(200).send("Deposito realizado con Exito!")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error al depositar!");
        }

    }

}