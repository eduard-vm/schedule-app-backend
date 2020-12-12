import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Task } from './task.interface';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDTO: CreateTaskDTO): Promise<Task> {
    return this.tasksService.create(createTaskDTO);
  }

  @Get(':id')
  async getByStudentID(@Param('id') studentID: string): Promise<Task[]> {
    return this.tasksService.findAllByStudentId(studentID);
  }

  @Get()
  async findAll(@Query() query) {
    return this.tasksService.findAllByParams(query);
  }
}
