import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Mentor {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop()
  patronymic: string;
  @Prop()
  position: string;
  @Prop({
    type: Types.ObjectId,
    ref: 'Schedule',
  })
  schedule: Types.ObjectId;
}

export const MentorSchema = SchemaFactory.createForClass(Mentor);
