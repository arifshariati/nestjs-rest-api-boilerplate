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

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }
  async findOne(field: Record<string, any>): Promise<User> {
    return this.userModel.findOne(field);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }
}
