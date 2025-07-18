import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleTachesModule } from './module-taches/module-taches.module';
import { ServiceTachesService } from './service-taches/service-taches.service';
import { ControllerTachesController } from './controller-taches/controller-taches.controller';
import { SchemaTaches, TachesSchema } from './schema/schema-taches.schema';

@Module({
  imports: [
     ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/default_db'),
    ModuleTachesModule,
    MongooseModule.forFeature([
      { name: SchemaTaches.name, schema: TachesSchema },
    ]),
  ],
  controllers: [AppController, ControllerTachesController],
  providers: [AppService, ServiceTachesService],
})
export class AppModule {}
