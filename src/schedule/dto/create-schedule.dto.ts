import { IsNotEmpty, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class CreateScheduleDTO {
  @IsNotEmpty()
  mentor: Types.ObjectId;

  @IsOptional()
  description?: string;
}
