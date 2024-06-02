import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  // register plugins and extensions
  app.enableCors({ origin: '*' }); // for production: specific IP
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({ type: VersioningType.URI });
  app.use(helmet());
  app.use(compression());

  const PORT = configService.get('PORT') || 4000;

  await app.listen(PORT, () =>
    Logger.log(`🚀 Server is listening on PORT:${PORT}`),
  );
}
bootstrap();
