import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ParentsModule } from './parents/parents.module';
import { ScheduleModule } from './schedule/schedule.module';
import { StudentsModule } from './students/students.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MentorsModule } from './mentors/mentors.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CoreModule,
    StudentsModule,
    ParentsModule,
    TasksModule,
    ScheduleModule,
    UsersModule,
    AuthModule,
    MentorsModule,
  ],
})
export class AppModule {}
