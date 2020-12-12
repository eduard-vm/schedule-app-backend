import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ScheduleController } from './schedule.controller';
import { scheduleProviders } from './schedule.provider';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ScheduleController],
  providers: [ScheduleService, ...scheduleProviders],
  exports: [ScheduleService],
})
export class ScheduleModule {}
