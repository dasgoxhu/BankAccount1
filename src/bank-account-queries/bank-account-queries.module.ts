import { Module } from '@nestjs/common';
import { AccountqueryController } from './api/controllers/accountquery.controller';
import { AccountqueryService } from './domain/services/accountquery.service';

@Module({
  controllers: [AccountqueryController],
  providers: [AccountqueryService]
})
export class BankAccountQueriesModule {}
