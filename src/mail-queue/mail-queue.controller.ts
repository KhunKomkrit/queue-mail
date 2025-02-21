import { Controller, Post, Body } from '@nestjs/common';
import { MailQueueService } from './mail-queue.service';
import { CreateMailQueueDto } from './dto/create-mail-queue.dto';

@Controller('mail-queue')
export class MailQueueController {
  constructor(private readonly mailQueueService: MailQueueService) {}

  @Post('send-mail')
  create(@Body() createMailQueueDto: CreateMailQueueDto) {
    return this.mailQueueService.addMailToQueue(createMailQueueDto);
  }
}
