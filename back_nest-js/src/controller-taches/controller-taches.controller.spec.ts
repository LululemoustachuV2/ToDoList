import { Test, TestingModule } from '@nestjs/testing';
import { ControllerTachesController } from './controller-taches.controller';

describe('ControllerTachesController', () => {
  let controller: ControllerTachesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerTachesController],
    }).compile();

    controller = module.get<ControllerTachesController>(ControllerTachesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
