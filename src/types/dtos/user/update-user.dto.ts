import { PartialType } from '@nestjs/mapped-types';
import { SignUpDto } from 'src/types/dtos/auth/signup.dto';

export class UpdateUserDto extends PartialType(SignUpDto) {}
