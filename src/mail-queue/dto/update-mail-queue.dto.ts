import { PartialType } from '@nestjs/mapped-types';
import { CreateMailQueueDto } from './create-mail-queue.dto';

export class UpdateMailQueueDto extends PartialType(CreateMailQueueDto) {}
