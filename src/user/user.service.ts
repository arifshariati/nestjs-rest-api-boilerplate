import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userCreated = new this.userModel(createUserDto);
    return userCreated.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({}).exec();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findOne({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ id, updateUserDto });
  }

  async remove(id: number): Promise<User> {
    return this.userModel.findOneAndDelete({ id });
  }
}
