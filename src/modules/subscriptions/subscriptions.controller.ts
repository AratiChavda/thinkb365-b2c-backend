import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('subscriptions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get()
  findAll() {
    return this.subscriptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.subscriptionsService.findOne(id);
  }

  @Post()
  create(@Body() subscriptionData: any) {
    return this.subscriptionsService.create(subscriptionData);
  }
}
