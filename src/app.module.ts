import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountCommnadModule } from './bank-account-commnad/bank-account-commnad.module';
import { BankAccountEntity } from './bank-account-commnad/domain/bankaccount.entity';
import { BankAccountQueriesModule } from './bank-account-queries/bank-account-queries.module';
import { AccountqueryService } from './bank-account-query/domain/accountquery/accountquery.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "test",
      entities: [BankAccountEntity],
      synchronize: true
    }),
    BankAccountCommnadModule,
    BankAccountQueriesModule],
  controllers: [],
  providers: [AccountqueryService],
})
export class AppModule { }
