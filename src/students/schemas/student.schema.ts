import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Parent } from 'src/parents/schemas/parent.schema';

@Schema()
export class Student {
  @Prop({
    required: true,
  })
  firstName: string;

  @Prop({
    required: true,
  })
  lastName: string;

  @Prop()
  diagnosis: string;

  @Prop({
    required: true,
  })
  birthDate: Date;

  @Prop()
  tariff: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parent',
  })
  parent: Parent;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
