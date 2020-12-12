import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from './constants';

export const databaseProvider = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/schedule'),
  },
];
