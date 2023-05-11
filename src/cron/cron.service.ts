import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import * as Sentry from '@sentry/node';

@Injectable()
export class CronService {
  @Cron(CronExpression.EVERY_SECOND)
  runEveryMinute() {
    const checkInId = Sentry.captureCheckIn({
      monitorSlug: 'runEveryMinute',
      status: 'in_progress',
    });
    console.log('Every minute');
    const id = Sentry.captureCheckIn({
      checkInId,
      monitorSlug: 'runEveryMinute',
      status: 'ok',
    });

    console.log(checkInId, id);
  }
}
