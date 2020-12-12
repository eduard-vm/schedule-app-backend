import { Mongoose } from 'mongoose';
import { StudentSchema } from './schemas/student.schema';

export const studentsProviders = [
  {
    provide: 'STUDENT_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Student', StudentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
