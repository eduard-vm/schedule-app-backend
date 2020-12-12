import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
// import { ScheduleRecord } from './schedule-record.schema';
import { ScheduleTask } from './interfaces/schedule-task.interface';

@Schema()
export class Schedule {
  @Prop({ type: Types.ObjectId, ref: 'Mentor' }) mentor: Types.ObjectId;

  @Prop() description: string;

  @Prop({
    validate: {
      validator: (records) => {
        const isInvalid = records.some((record: ScheduleTask): boolean => {
          const dow = Number(record.dayOfWeek);
          if (dow < 0 || dow > 6) {
            return true;
          }
          return record.time.some((t) => {
            const [hh, mm] = t.split(':');
            if (Number(hh) > 24) {
              return true;
            }
            if (Number(mm) > 60) {
              return true;
            }
            return false;
          });
        });
        return !isInvalid;
      },
    },
  })
  records: ScheduleTask[];
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
