import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMentorDTO {
  @IsNotEmpty() firstName: string;
  @IsNotEmpty() lastName: string;
  @IsOptional() patronymic: string;
  @IsOptional() position: string;
}
