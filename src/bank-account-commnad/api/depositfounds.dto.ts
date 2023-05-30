import { IsPositive, Min } from "class-validator"

export class DepositFoundDto{
    id: string
    
    @IsPositive()
    @Min(0)
    founds: number
}