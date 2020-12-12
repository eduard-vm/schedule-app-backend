import { Parent } from 'src/parents/interfaces/parent.interface';

export class CreateStudentDto {
  firstName: string;
  lastName: string;
  birthDate: Date;
  diagnosis: string;
  tariff: number;
}
