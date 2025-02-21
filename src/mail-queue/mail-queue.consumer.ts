import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
@Processor('mail')
export class MailQueueConsumer extends WorkerHost {
  private readonly logger = new Logger(MailQueueConsumer.name);

  async process(job: Job) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);
    this.logger.debug('Transcoding completed');
    let progress: number = 1;
    for (let i = 0; i < 100; i++) {
      this.logger.debug(`Progress: ${progress}`);
      progress += 1;
      await job.updateProgress(progress);
    }
    return {};
  }
}
