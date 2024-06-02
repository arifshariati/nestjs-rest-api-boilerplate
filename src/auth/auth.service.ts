import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignInDto } from 'src/types/dtos/signin.dto';
import { SignUpDto } from 'src/types/dtos/signup.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn({
    email,
    password,
  }: SignInDto): Promise<{ access_token: string } | UnauthorizedException> {
    const user = await this.userService.findOne({ email });

    if (!user) throw new UnauthorizedException();
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { sub: user._id, email: user.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async signUp({
    email,
    password,
    ...rest
  }: SignUpDto): Promise<{ access_token: string } | UnauthorizedException> {
    const user = await this.userService.findOne({ email });
    if (user) throw new BadRequestException('User already exists');

    const hanshedPassword = await bcrypt.hash(password, 10);
    const createdUser = await this.userService.create({
      email,
      password: hanshedPassword,
      ...rest,
    });

    if (!createdUser) throw new UnauthorizedException();

    const payload = { sub: createdUser._id, email: createdUser.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
