import { Mongoose } from 'mongoose';
import { MENTOR_MODEL } from './constants';
import { MentorSchema } from './mentor.schema';

export const mentorsProviders = [
  {
    provide: MENTOR_MODEL,
    useFactory: (mongoose: Mongoose) => mongoose.model('Mentor', MentorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
