import { Mongoose } from 'mongoose';
import { ParentSchema } from './schemas/parent.schema';

export const parentsProviders = [
  {
    provide: 'PARENT_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Parent', ParentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
