import { Test, TestingModule } from '@nestjs/testing';
import { AccountqueryController } from './accountquery.controller';

describe('AccountqueryController', () => {
  let controller: AccountqueryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountqueryController],
    }).compile();

    controller = module.get<AccountqueryController>(AccountqueryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
