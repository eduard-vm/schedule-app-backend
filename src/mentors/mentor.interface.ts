import { Document, Types } from 'mongoose';

export interface Mentor extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly patronymic: string;
  readonly position: string;
  schedule: Types.ObjectId;
}
