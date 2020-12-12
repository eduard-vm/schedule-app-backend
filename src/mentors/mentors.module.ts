import { Module } from '@nestjs/common';
import { MentorService } from './mentors.service';
import { MentorController } from './mentors.controller';
import { mentorsProviders } from './mentors.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ScheduleModule } from 'src/schedule/schedule.module';
import { scheduleProviders } from 'src/schedule/schedule.provider';

@Module({
  imports: [DatabaseModule, ScheduleModule],
  providers: [MentorService, ...mentorsProviders, ...scheduleProviders],
  controllers: [MentorController],
  exports: [MentorService],
})
export class MentorsModule {}
