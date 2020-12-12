import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTaskDTO } from './dto/create-task.dto';
// import { UpdateStudentDto } from './dto/update-student.dto';
import { Task } from './task.interface';

interface WhereParams {
  [key: string]: any;
}

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_MODEL')
    private readonly taskModel: Model<Task>,
  ) {}

  async create(createTaskDTO: CreateTaskDTO): Promise<Task> {
    const createdStudent = new this.taskModel(createTaskDTO);
    return createdStudent.save();
  }

  async findAllByStudentId(studentId: string): Promise<Task[]> {
    return this.taskModel.where('studentId').equals(studentId).exec();
  }

  async findAllByParams(query: any): Promise<Task[]> {
    const whereParams: WhereParams = {};

    if (query.from) {
      whereParams.startDate = {
        $gte: new Date(query.from),
      };
    }
    if (query.to) {
      if (!whereParams.startDate) {
        whereParams.startDate = {
          $lt: new Date(query.to),
        };
      } else {
        whereParams.startDate.$lt = new Date(query.to);
      }
    }
    if (query.status) whereParams.status = query.status;
    if (query.taskType) whereParams.taskType = query.taskType;

    return this.taskModel.find(whereParams).exec();
  }

  // async getById(id: string): Promise<Student> {
  //   return this.studentModel.findById(id);
  // }

  // async deleteById(id: string): Promise<Student> {
  //   return this.studentModel.deleteOne({ _id: id });
  // }

  // async updateById(
  //   id: string,
  //   updateStudentDto: UpdateStudentDto,
  // ): Promise<Student> {
  //   return this.studentModel.updateOne({ _id: id }, updateStudentDto);
  // }
}
