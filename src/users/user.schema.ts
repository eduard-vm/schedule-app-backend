import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Roles } from 'src/auth/Roles';

@Schema()
export class User {
  @Prop({ required: true }) username: string;
  @Prop({ required: true, unique: true }) email: string;
  @Prop({ required: true }) password: string;
  @Prop() phoneNumber: string;
  @Prop({ required: true, default: Roles.USER }) role: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
