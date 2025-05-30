import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('payments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: number) {
    return this.paymentsService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(id);
  }

  @Post()
  create(@Body() paymentData: any) {
    return this.paymentsService.create(paymentData);
  }

  @Put(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: 'SUCCESS' | 'FAILED' | 'PENDING',
  ) {
    return this.paymentsService.updateStatus(id, status);
  }
}
