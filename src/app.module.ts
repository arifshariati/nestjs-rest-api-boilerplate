import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './guards';
import { EnvConfigModule } from './infra/config/env-config/env-config.module';
import { MongooseConfigModule } from './infra/config/mongoose-config/mongoose-config.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([{ ttl: 60, limit: 10 }]),
    MongooseConfigModule,
    UserModule,
    AuthModule,
    EnvConfigModule,
    MongooseConfigModule,
  ],
  controllers: [],
  providers: [{ provide: 'APP_GUARD', useClass: AuthGuard }], // APP_GUARD is applied globally
})
export class AppModule {}
