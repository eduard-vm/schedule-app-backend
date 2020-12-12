import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SCHEDULE_MODEL } from './constants';
import { CreateScheduleDTO } from './dto/create-schedule.dto';
import { Schedule } from './interfaces/schedule.interface';
import { ScheduleTask } from './interfaces/schedule-task.interface';

// const daysOfWeek = [
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday',
//   'sunday',
// ];

@Injectable()
export class ScheduleService {
  constructor(
    @Inject(SCHEDULE_MODEL)
    private readonly scheduleModel: Model<Schedule>,
  ) {}

  async updateSchedule(
    id: string,
    scheduleRecords: ScheduleTask[],
  ): Promise<Schedule> {
    await this.scheduleModel
      .findByIdAndUpdate(
        id,
        { records: scheduleRecords },
        { runValidators: true, useFindAndModify: false, lean: true },
      )
      .exec();
    const schedule = await this.scheduleModel.findById(id);
    return schedule;
  }

  async getScheduleById(id: string): Promise<Schedule> {
    return this.scheduleModel.findOne({ _id: id }).exec();
  }

  async createSchedule(
    createScheduleDTO: CreateScheduleDTO,
  ): Promise<Schedule> {
    const schedule = new this.scheduleModel(createScheduleDTO);
    return schedule.save();
  }

  async findAllSchedules(): Promise<Schedule[]> {
    return this.scheduleModel.find().exec();
  }

  async deleteScheduleById(id: string) {
    return this.scheduleModel.findByIdAndDelete(id);
  }
}
