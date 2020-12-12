import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { studentsProviders } from './students.providers';
import { DatabaseModule } from 'src/database/database.module';
// import { Student, StudentSchema } from './schemas/student.schema';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentsController],
  providers: [StudentsService, ...studentsProviders],
  // exports: [StudentsService],
})
export class StudentsModule {}
