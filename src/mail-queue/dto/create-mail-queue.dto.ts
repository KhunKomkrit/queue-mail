import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateMailQueueDto {
  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  toEmail: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}
