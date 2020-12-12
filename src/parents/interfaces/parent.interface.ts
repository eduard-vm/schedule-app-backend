import { Document } from 'mongoose';

export interface Parent extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly phoneNumber: string;
  readonly email: string;
  readonly messengers: Array<string>;
}
