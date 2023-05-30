import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountServiceImpl } from './bankaccount.serviceimpl';

describe('AccountqueryService', () => {
  let service: BankAccountServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankAccountServiceImpl],
    }).compile();

    service = module.get<BankAccountServiceImpl>(BankAccountServiceImpl);
  });

  it('close Account ', () => {
    let expected = "La cuenta solicitada no Existe!";
    let recived = service.closeAccountCommnad("test");

  });




});
