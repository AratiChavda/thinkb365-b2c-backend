import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('payment-methods')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  @Get()
  findAll(@GetUser('id') userId: number) {
    return this.paymentMethodsService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser('id') userId: number) {
    return this.paymentMethodsService.findOne(+id, userId);
  }

  @Post()
  create(
    @GetUser('id') userId: number,
    @Body() createPaymentMethodDto: CreatePaymentMethodDto,
  ) {
    return this.paymentMethodsService.create(userId, createPaymentMethodDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @GetUser('id') userId: number,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto,
  ) {
    return this.paymentMethodsService.update(
      +id,
      userId,
      updatePaymentMethodDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser('id') userId: number) {
    return this.paymentMethodsService.remove(+id, userId);
  }
}
