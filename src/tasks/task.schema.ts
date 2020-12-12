import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Task {
  @Prop({
    required: true,
  })
  startDate: Date;

  @Prop({
    required: true,
  })
  endDate: Date;

  @Prop()
  description: string;

  @Prop({
    default: 'lesson',
  })
  taskType: string;

  @Prop({
    default: 'planned',
  })
  status: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  })
  studentId: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
