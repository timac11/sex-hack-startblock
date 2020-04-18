import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';

const SECRET = 'greenRec';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
  }

  static passwordHash(password: string): string {
    return crypto
      .createHmac('sha256', SECRET)
      .update(password)
      .digest('hex');
  }

  public async findByCredentials(login: string, password: string): Promise<User | undefined> {
    //const digest = UsersService.passwordHash(password);
    return this.userRepository.findOne({
      login,
      password
    });
  }

  public async save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}