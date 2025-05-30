import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(['ADMINISTRATOR', 'SUBSCRIBER', 'HOUSEHOLD_SUBSCRIBER'])
  role: 'ADMINISTRATOR' | 'SUBSCRIBER' | 'HOUSEHOLD_SUBSCRIBER';
}
