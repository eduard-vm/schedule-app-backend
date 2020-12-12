import { Mongoose } from 'mongoose';
import { DATABASE_CONNECTION } from 'src/database/constants';
import { SCHEDULE_MODEL } from './constants';
import { ScheduleSchema } from './schedule.schema';

export const scheduleProviders = [
  {
    provide: SCHEDULE_MODEL,
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Schedule', ScheduleSchema),
    inject: [DATABASE_CONNECTION],
  },
];
