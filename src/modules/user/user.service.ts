import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dtos';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../infra/schemas';
import { SignUpDto } from 'src/modules/auth/dtos';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: SignUpDto): Promise<UserDocument> {
    const userCreated = new this.userModel(createUserDto);
    return await userCreated.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({}).exec();
  }

  async findById(id: string): Promise<UserDocument> {
    return await this.userModel.findById(id).exec();
  }
  async findOne(field: Record<string, any>): Promise<UserDocument> {
    return await this.userModel.findOne(field).exec();
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async remove(id: string): Promise<UserDocument> {
    return this.userModel.findByIdAndDelete(id);
  }
}
