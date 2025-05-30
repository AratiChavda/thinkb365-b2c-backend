import { Injectable } from '@nestjs/common';
import { SubscriptionItem } from '../../models/subscription-item.model';
// import { Product } from '../../models/product.model';

@Injectable()
export class SubscriptionItemsService {
  async findAll() {
    return await SubscriptionItem.query().withGraphFetched(
      '[subscription, product, offer]',
    );
  }

  async findOne(id: string) {
    return await SubscriptionItem.query()
      .findById(id)
      .withGraphFetched('[subscription, product, offer]');
  }

  async findBySubscription(subscriptionId: string) {
    return await SubscriptionItem.query()
      .where('subscriptionId', subscriptionId)
      .withGraphFetched('[subscription, product, offer]');
  }

  async create(itemData: Partial<SubscriptionItem>[]) {
    return await SubscriptionItem.query().insert(itemData);
  }

  async updateStatus(
    id: string,
    status: 'PENDING' | 'ACTIVE' | 'EXPIRED' | 'CANCELLED',
  ) {
    return await SubscriptionItem.query().findById(id).patch({ status });
  }

  async update(id: string, itemData: Partial<SubscriptionItem>) {
    return await SubscriptionItem.query().findById(id).patch(itemData);
  }

  // async activateSubscriptionItems(subscriptionId: string, itemIds?: string[]) {
  //   const query = SubscriptionItem.query()
  //     .where('subscription_id', subscriptionId)
  //     .where('status', 'PENDING');

  //   if (itemIds && itemIds.length > 0) {
  //     query.whereIn('id', itemIds);
  //   }

  //   const itemsToActivate = await query;

  //   const now = new Date();

  //   for (const item of itemsToActivate) {
  //     let endDate: Date | null = null;

  //     if (item.validity_value && item.validity_unit) {
  //       endDate = this.calculateEndDate(
  //         now,
  //         item.validity_value,
  //         item.validity_unit,
  //       );
  //     } else {
  //       const product = await Product.query().findById(item.product_id);
  //       if (product?.validity_value && product?.validity_unit) {
  //         endDate = this.calculateEndDate(
  //           now,
  //           product.validity_value,
  //           product.validity_unit,
  //         );
  //       }
  //     }

  //     await SubscriptionItem.query().findById(item.id).patch({
  //       status: 'ACTIVE',
  //       start_date: now,
  //       end_date: endDate,
  //     });
  //   }
  //   await query.withGraphFetched('[product, offer]');
  //   return {
  //     message: 'Subscription activated successfully',
  //   };
  // }

  private calculateEndDate(startDate: Date, value: number, unit: string): Date {
    const date = new Date(startDate);

    switch (unit) {
      case 'minutes':
        date.setMinutes(date.getMinutes() + value);
        break;
      case 'hours':
        date.setHours(date.getHours() + value);
        break;
      case 'days':
        date.setDate(date.getDate() + value);
        break;
      case 'months':
        date.setMonth(date.getMonth() + value);
        break;
      case 'years':
        date.setFullYear(date.getFullYear() + value);
        break;
    }

    return date;
  }
}
