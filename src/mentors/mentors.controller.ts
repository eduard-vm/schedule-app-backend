import {
  Controller,
  Body,
  Post,
  UseGuards,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { RolesAllowed } from 'src/auth/decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/Roles';
import { CreateMentorDTO } from './dto/create-mentor.dto';
import { Mentor } from './mentor.interface';
import { MentorService } from './mentors.service';

@Controller('mentors')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MentorController {
  constructor(private mentorService: MentorService) {}

  @Post()
  @RolesAllowed(Roles.ADMIN)
  async create(@Body() createMentorDTO: CreateMentorDTO): Promise<Mentor> {
    try {
      return this.mentorService.create(createMentorDTO);
    } catch (e) {
      console.log(e);
    }
  }

  @Delete(':id')
  @RolesAllowed(Roles.ADMIN)
  async delete(@Param('id') mentorId: string) {
    return this.mentorService.delete(mentorId);
  }

  @Get()
  @RolesAllowed(Roles.ADMIN)
  async findAll(): Promise<Mentor[]> {
    return this.mentorService.findAll();
  }

  @Get(':id')
  @RolesAllowed(Roles.ADMIN)
  async getById(@Param('id') mentorId: string): Promise<Mentor> {
    return this.mentorService.findById(mentorId);
  }
}
