import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TachesDocument = SchemaTaches & Document;
// Type combinant le schéma Taches avec le Document Mongoose (ajoute _id, méthodes, etc.)

@Schema()
// Décorateur NestJS pour définir un schéma Mongoose basé sur une classe
export class SchemaTaches {
  @Prop({ required: true })
  // Propriété obligatoire dans la base, correspond au titre de la tâche
  title: string;

  @Prop()
  // Propriété optionnelle pour la description de la tâche
  description: string;

  @Prop({ default: false })
  // Statut d’achèvement avec valeur par défaut false (non complété)
  completed: boolean;

  @Prop({ default: Date.now })
  // Date de création avec valeur par défaut à l’instant de création du document
  createdAt: Date;
}

export const TachesSchema = SchemaFactory.createForClass(SchemaTaches);
// Génère le schéma Mongoose à partir de la classe décorée @Schema
