import { PartialType } from '@nestjs/mapped-types';
import { SignUpDto } from 'src/types/dtos/signup.dto';

export class UpdateUserDto extends PartialType(SignUpDto) {}
