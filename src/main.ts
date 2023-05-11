import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';

async function bootstrap() {
  Sentry.init({
    dsn: 'https://f9affc17c8e248c6b895fd855b687fe8@o19635.ingest.sentry.io/4505165488193536',
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
