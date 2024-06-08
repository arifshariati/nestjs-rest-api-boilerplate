import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './modules/auth/auth.module';
import { validateEnv } from './config';
import { AuthGuard } from './guards';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
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
