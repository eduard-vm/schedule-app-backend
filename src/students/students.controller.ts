import {
  Body,
  Controller,
  Param,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';
import { Student } from './interfaces/student.interface';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    const createdStudent = await this.studentsService.create(createStudentDto);
    console.log('createdStudent ', createdStudent);
    return createdStudent;
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Student> {
    return this.studentsService.getById(id);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<Student> {
    return this.studentsService.deleteById(id);
  }

  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return this.studentsService.updateById(id, updateStudentDto);
  }
}
