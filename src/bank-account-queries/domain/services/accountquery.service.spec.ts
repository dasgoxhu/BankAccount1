import { Test, TestingModule } from '@nestjs/testing';
import { AccountqueryService } from './accountquery.service';

describe('AccountqueryService', () => {
  let service: AccountqueryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountqueryService],
    }).compile();

    service = module.get<AccountqueryService>(AccountqueryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
