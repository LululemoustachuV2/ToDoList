import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TachesDocument = SchemaTaches & Document;

@Schema()
export class SchemaTaches {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const TachesSchema = SchemaFactory.createForClass(SchemaTaches);
