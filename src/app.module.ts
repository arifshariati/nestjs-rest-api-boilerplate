import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { validate } from './config/env.validation';
import { AuthGuard } from './guards/auth.guard';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: [`.env.${ENV}.local`],
    }),
    ThrottlerModule.forRoot([{ ttl: 60, limit: 10 }]),
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'test',
      autoCreate: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [{ provide: 'APP_GUARD', useClass: AuthGuard }], // APP_GUARD is applied globally
})
export class AppModule {}
