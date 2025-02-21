import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';
import { CreateMailQueueDto } from './dto/create-mail-queue.dto';

export class MailQueueService {
  constructor(@InjectQueue('mail') private readonly mailQueue: Queue) {}

  async addMailToQueue(createMailQueueDto: CreateMailQueueDto) {
    await this.mailQueue.add('mail', createMailQueueDto);
  }
}
