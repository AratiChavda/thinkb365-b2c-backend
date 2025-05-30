import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { SubscriptionItemsService } from './subscription-items.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('subscription-items')
@Controller('subscription-items')
export class SubscriptionItemsController {
  constructor(
    private readonly subscriptionItemsService: SubscriptionItemsService,
  ) {}

  @Post()
  create(@Body() itemData: any[]) {
    return this.subscriptionItemsService.create(itemData);
  }

  // @Post(':subscriptionId/activate')
  // activateSubscriptionItems(
  //   @Param('subscriptionId') subscriptionId: string,
  //   @Body('itemIds') itemIds?: string[],
  // ) {
  //   return this.subscriptionItemsService.activateSubscriptionItems(
  //     subscriptionId,
  //     itemIds,
  //   );
  // }

  @Get()
  findAll() {
    return this.subscriptionItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionItemsService.findOne(id);
  }

  @Get('subscription/:subscriptionId')
  findBySubscription(@Param('subscriptionId') subscriptionId: string) {
    return this.subscriptionItemsService.findBySubscription(subscriptionId);
  }

  @Put(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: 'PENDING' | 'ACTIVE' | 'EXPIRED' | 'CANCELLED',
  ) {
    return this.subscriptionItemsService.updateStatus(id, status);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() itemData: any) {
    return this.subscriptionItemsService.update(id, itemData);
  }
}
