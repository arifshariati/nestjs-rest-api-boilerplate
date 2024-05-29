import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';

const PORT = parseInt(process.env.PORT, 10) || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // register plugins and extensions
  app.enableCors({ origin: '*' }); // for production: specific IP
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({ type: VersioningType.URI });
  app.use(helmet());
  app.use(compression());

  await app.listen(PORT, () =>
    Logger.log(`🚀 Server is listening on PORT:${PORT}`),
  );
}
bootstrap();
