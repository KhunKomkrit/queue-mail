import { Module } from '@nestjs/common';
import { MailQueueService } from './mail-queue.service';
import { MailQueueController } from './mail-queue.controller';
import { BullModule } from '@nestjs/bullmq';
import { MailQueueConsumer } from './mail-queue.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'mail',
    }),
  ],
  controllers: [MailQueueController],
  providers: [MailQueueService, MailQueueConsumer],
})
export class MailQueueModule {}
