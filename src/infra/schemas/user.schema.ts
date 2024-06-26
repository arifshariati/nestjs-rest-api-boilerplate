import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  age: number;

  @Prop({ required: false })
  last_login: Date;

  @Prop({ required: false })
  hashed_refresh_token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
