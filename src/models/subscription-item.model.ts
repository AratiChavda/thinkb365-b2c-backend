import { BaseModel } from './base.model';
import { Subscription } from './subscription.model';
import { Product } from './product.model';
import { Offer } from './offer.model';

export class SubscriptionItem extends BaseModel {
  static tableName = 'subscription_items';

  subscription_id!: string;
  product_id!: number;
  offer_id!: number | null;
  is_trial!: boolean;
  trial_end_date!: Date | null;
  start_date!: Date | null;
  end_date!: Date | null;
  price_before_discount!: number;
  validity_value!: number;
  validity_unit!: 'days' | 'hours' | 'minutes' | 'times' | 'months' | 'years';
  discount_applied!: number;
  final_price!: number;
  status!: 'PENDING' | 'ACTIVE' | 'EXPIRED' | 'CANCELLED';

  static relationMappings = {
    subscription: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Subscription,
      join: {
        from: 'subscription_items.subscription_id',
        to: 'subscriptions.id',
      },
    },
    product: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Product,
      join: {
        from: 'subscription_items.product_id',
        to: 'products.id',
      },
    },
    offer: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Offer,
      join: {
        from: 'subscription_items.offer_id',
        to: 'offers.id',
      },
    },
  };
}
