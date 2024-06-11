import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './guards';
import { EnvConfigModule } from './infra/config/env-config/env-config.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([{ ttl: 60, limit: 10 }]),
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'test',
      autoCreate: true,
    }),
    UserModule,
    AuthModule,
    EnvConfigModule,
  ],
  controllers: [],
  providers: [{ provide: 'APP_GUARD', useClass: AuthGuard }], // APP_GUARD is applied globally
})
export class AppModule {}
