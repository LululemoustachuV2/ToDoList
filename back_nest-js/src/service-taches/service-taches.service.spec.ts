import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTachesService } from './service-taches.service';

describe('ServiceTachesService', () => {
  let service: ServiceTachesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceTachesService],
    }).compile();

    service = module.get<ServiceTachesService>(ServiceTachesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
