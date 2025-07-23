import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ControllerTachesController } from 'src/controller-taches/controller-taches.controller';
import { SchemaTaches, TachesSchema } from 'src/schema/schema-taches.schema';
import { ServiceTachesService } from 'src/service-taches/service-taches.service';

@Module({
  imports: [
    // Enregistre le modèle Mongoose 'SchemaTaches' avec son schéma 'TachesSchema'
    // Permet l'injection et l'utilisation du modèle dans les services
    MongooseModule.forFeature([
      { name: SchemaTaches.name, schema: TachesSchema },
    ]),
  ],
  controllers: [ControllerTachesController], // Enregistre le controller pour gérer les routes liées aux tâches
  providers: [ServiceTachesService], // Fournit le service contenant la logique métier des tâches
})
// Ce module regroupe les composants liés à la gestion des tâches (modèle, controller, service)
export class ModuleTachesModule {}
