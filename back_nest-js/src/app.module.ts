import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleTachesModule } from './module-taches/module-taches.module';
import { ServiceTachesService } from './service-taches/service-taches.service';
import { ControllerTachesController } from './controller-taches/controller-taches.controller';
import { SchemaTaches, TachesSchema } from './schema/schema-taches.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://UserTestTODO:PUoR4YooCNdNFgG2@cluster0.4lgxlgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ModuleTachesModule,
    MongooseModule.forFeature([
      { name: SchemaTaches.name, schema: TachesSchema },
    ]),
  ],
  controllers: [AppController, ControllerTachesController],
  providers: [AppService, ServiceTachesService],
})
export class AppModule {}
