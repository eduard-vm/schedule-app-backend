import { Document } from 'mongoose';

export interface Student extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly birthDate: Date;
  readonly diagnosis: string;
  readonly tariff: number;
}
