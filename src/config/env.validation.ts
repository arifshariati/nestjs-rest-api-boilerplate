import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  JWT_SECRET: string;

  @IsString()
  JWT_EXPIRATION_TIME: string;

  @IsString()
  JWT_REFRESH_TOKEN_SECRET: string;

  @IsString()
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;

  @IsNumber()
  PORT: number;

  @IsString()
  MONGODB_DATABASE: string;

  @IsString()
  MONGODB_HOSTNAME: string;

  @IsNumber()
  MONGODB_PORT: number;
}

export const validateEnv = (config: Record<string, unknown>) => {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
};
