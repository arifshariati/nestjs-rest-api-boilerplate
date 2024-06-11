import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDatabaseConfig, IJWTConfig } from 'src/domain/config';

@Injectable()
export class EnvConfigService implements IDatabaseConfig, IJWTConfig {
  constructor(private configService: ConfigService) {}

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRATION_TIME');
  }

  getJwtRefreshSecret(): string {
    return this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET');
  }

  getJwtRefreshExpirationTime(): string {
    return this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME');
  }

  getMongodbUrl(): string {
    return this.configService.get<string>('MONGODB_URL');
  }

  getMongodbName(): string {
    return this.configService.get<string>('MONGODB_NAME');
  }

  getMongodbHost(): string {
    return this.configService.get<string>('MONGODB_HOST');
  }

  getMongodbPort(): number {
    return this.configService.get<number>('MONGODB_PORT');
  }
}
