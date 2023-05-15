import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';

async function bootstrap() {
  Sentry.init({
    debug: true,
    dsn: 'https://f9affc17c8e248c6b895fd855b687fe8@o19635.ingest.sentry.io/4505165488193536',
  });

  // log out check in envelopes
  Sentry.getCurrentHub()
    .getClient()
    .on('beforeEnvelope', (env) => {
      const body = env[1];
      const item = body[0];
      if (item[0].type === 'check_in') {
        console.log(item[1]);
      }
    });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
