import { PartialType } from '@nestjs/mapped-types';
import { SignUpDto } from 'src/modules/auth/dtos';

export class UpdateUserDto extends PartialType(SignUpDto) {}
