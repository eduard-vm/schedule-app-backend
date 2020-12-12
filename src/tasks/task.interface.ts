import { Document } from 'mongoose';

export interface Task extends Document {
  readonly startDate: Date;
  readonly endDate: Date;
  readonly description: string;
  readonly taskType: string;
  readonly status: string;
  readonly studentId: string;
}
