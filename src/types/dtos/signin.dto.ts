import { IsAlphanumeric, IsEmail } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @IsAlphanumeric()
  password: string;
}
