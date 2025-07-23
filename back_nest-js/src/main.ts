import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Active le CORS pour permettre les requêtes cross-origin (utile en dev et prod)

  await app.listen(process.env.PORT ?? 3000);
  // Démarre le serveur HTTP sur le port défini dans la variable d'environnement PORT,
  // ou sur le port 3000 par défaut si non défini
}
bootstrap();
