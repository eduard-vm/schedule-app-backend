import { Document, Types } from 'mongoose';
import { ScheduleTask } from './schedule-task.interface';

export interface Schedule extends Document {
  readonly mentor: Types.ObjectId;
  readonly description: string;
  readonly records: ScheduleTask[];
}
