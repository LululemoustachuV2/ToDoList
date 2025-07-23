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
    // Charge la configuration d’environnement (fichier .env) au démarrage

    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/default_db',
    ),
    // Connexion à la base MongoDB via l’URL définie dans la variable d’environnement MONGO_URI
    // Utilise une base locale par défaut si la variable n’est pas définie

    ModuleTachesModule,
    // Import du module spécifique aux tâches (modèle, controller, service)

    MongooseModule.forFeature([
      { name: SchemaTaches.name, schema: TachesSchema },
    ]),
    // Enregistrement du modèle Taches dans ce module global
  ],
  controllers: [AppController, ControllerTachesController],
  providers: [AppService, ServiceTachesService],
})
export class AppModule {}
