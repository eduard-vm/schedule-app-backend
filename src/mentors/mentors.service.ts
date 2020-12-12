import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ScheduleService } from 'src/schedule/schedule.service';
import { MENTOR_MODEL } from './constants';
import { CreateMentorDTO } from './dto/create-mentor.dto';
import { Mentor } from './mentor.interface';

@Injectable()
export class MentorService {
  constructor(
    @Inject(MENTOR_MODEL)
    private readonly mentorModel: Model<Mentor>,
    private scheduleService: ScheduleService,
  ) {}

  async create(createMentorDTO: CreateMentorDTO): Promise<Mentor> {
    const mentor = await new this.mentorModel(createMentorDTO);
    const schedule = await this.scheduleService.createSchedule({
      mentor: mentor._id,
    });
    mentor.schedule = schedule._id;
    mentor.save();

    return mentor;
  }

  async delete(id: string): Promise<Mentor> {
    const mentor = this.mentorModel.findOneAndDelete({ _id: id });
    return mentor;
    // const session = await this.mentorModel.startSession();
    // try {
    //   await this.scheduleService.findByMentorId(id);
    // } catch (e) {
    //   throw e;
    // } finally {
    //   session.endSession();
    // }
  }

  async findAll(): Promise<Mentor[]> {
    return this.mentorModel.find().exec();
  }

  async findById(id: string): Promise<Mentor> {
    const mentor = await this.mentorModel
      .findOne({
        _id: id,
      })
      .populate({
        path: 'schedule',
        model: 'Schedule',
      })
      .exec();

    return mentor;
  }
}
