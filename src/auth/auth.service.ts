import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import sha1 = require('crypto-js/sha1');
import { User } from 'src/users/user.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, userPassword: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (user && user.password === sha1(userPassword).toString()) {
      delete user.password;
      return user;
    }

    return null;
  }

  async register(user: User) {
    console.log(user, sha1);
    user.password = sha1(user.password).toString();

    try {
      await this.usersService.create(user);
      return {
        access_token: this.jwtService.sign(user),
      };
    } catch (e) {
      throw e;
    }
  }
}
