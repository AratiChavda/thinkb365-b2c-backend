import { Module } from '@nestjs/common';
import { SubscriptionItemsController } from './subscription-items.controller';
import { SubscriptionItemsService } from './subscription-items.service';

@Module({
  controllers: [SubscriptionItemsController],
  providers: [SubscriptionItemsService],
  exports: [],
})
export class SubscriptionItemsModule {}
