import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const record = new this.userModel(createUserDTO);
    return record.save();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel
      .findOne({
        username,
      })
      .exec();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel
      .findOne({
        email,
      })
      .exec();
  }

  async deleteById(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
