import {
  IsEnum,
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  Length,
  Min,
  Max,
} from 'class-validator';
import { PaymentMethodType } from 'src/models/payment-method.enum';

export class CreatePaymentMethodDto {
  @IsEnum(PaymentMethodType)
  method_type!: PaymentMethodType;

  @IsOptional()
  @IsString()
  @Length(4, 4)
  card_last4?: string;

  @IsOptional()
  @IsString()
  card_brand?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(12)
  card_exp_month?: number;

  @IsOptional()
  @IsNumber()
  @Min(2023)
  card_exp_year?: number;

  @IsOptional()
  @IsString()
  upi_id?: string;

  @IsOptional()
  @IsString()
  paypal_email?: string;

  @IsOptional()
  @IsString()
  @Length(4, 4)
  bank_account_last4?: string;

  @IsOptional()
  @IsString()
  bank_name?: string;

  @IsOptional()
  @IsBoolean()
  is_default?: boolean;
}
