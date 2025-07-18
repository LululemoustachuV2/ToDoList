import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ControllerTachesController } from 'src/controller-taches/controller-taches.controller';
import { SchemaTaches, TachesSchema } from 'src/schema/schema-taches.schema';
import { ServiceTachesService } from 'src/service-taches/service-taches.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SchemaTaches.name, schema: TachesSchema }]),
  ],
  controllers: [ControllerTachesController],
  providers: [ServiceTachesService],
})
export class ModuleTachesModule {}
