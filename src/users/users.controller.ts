import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.usersService.create(createUserDTO);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.usersService.deleteById(id);
  }
}
