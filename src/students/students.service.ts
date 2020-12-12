import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './interfaces/student.interface';

@Injectable()
export class StudentsService {
  constructor(
    @Inject('STUDENT_MODEL')
    private readonly studentModel: Model<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async getById(id: string): Promise<Student> {
    return this.studentModel.findById(id);
  }

  async deleteById(id: string): Promise<Student> {
    return this.studentModel.deleteOne({ _id: id });
  }

  async updateById(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return this.studentModel.updateOne({ _id: id }, updateStudentDto);
  }
}
