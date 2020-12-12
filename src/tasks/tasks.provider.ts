import { Mongoose } from 'mongoose';
import { DATABASE_CONNECTION } from 'src/database/constants';
import { TASK_MODEL } from './constants';
import { TaskSchema } from './task.schema';

export const tasksProviders = [
  {
    provide: TASK_MODEL,
    useFactory: (mongoose: Mongoose) => mongoose.model('Task', TaskSchema),
    inject: [DATABASE_CONNECTION],
  },
];
