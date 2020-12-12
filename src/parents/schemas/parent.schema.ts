import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Student } from 'src/students/schemas/student.schema';
import * as mongoose from 'mongoose';

export type ParentDocument = Parent & Document;

@Schema()
export class Parent {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  messengers: Array<string>;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  })
  child: Student;
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
