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

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  getDatabaseHostName(): string {
    return this.configService.get<string>('DATABASE_HOST_NAME');
  }

  getDatabasePortNumber(): number {
    return this.configService.get<number>('DATABASE_PORT_NUMBER');
  }
}
