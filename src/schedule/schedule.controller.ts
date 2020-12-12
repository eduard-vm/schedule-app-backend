import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule } from './interfaces/schedule.interface';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/Roles';
import { RolesAllowed } from 'src/auth/decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ScheduleTask } from './interfaces/schedule-task.interface';

@Controller('schedule')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Get(':id')
  @RolesAllowed(Roles.USER, Roles.ADMIN)
  async getSchedule(@Param('id') id: string): Promise<Schedule> {
    return this.scheduleService.getScheduleById(id);
  }

  @Get()
  @RolesAllowed(Roles.ADMIN)
  async findAll(): Promise<Schedule[]> {
    return this.scheduleService.findAllSchedules();
  }

  @Delete(':id')
  @RolesAllowed(Roles.USER, Roles.ADMIN)
  async delete(@Param('id') id: string): Promise<Schedule> {
    return this.scheduleService.deleteScheduleById(id);
  }

  @Put(':id')
  @RolesAllowed(Roles.USER, Roles.ADMIN)
  async updateSchedule(
    @Body() records: ScheduleTask[],
    @Param('id') id: string,
  ): Promise<Schedule> {
    return this.scheduleService.updateSchedule(id, records);
  }
}
