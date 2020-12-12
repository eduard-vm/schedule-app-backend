import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  password: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly role: number;
}
