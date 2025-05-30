import { BaseModel } from './base.model';
import { User } from './user.model';
import { Payment } from './payment.model';

export class Subscription extends BaseModel {
  static tableName = 'subscriptions';

  user_id!: number;
  total_amount!: number;
  payment_id!: string;

  static relationMappings = {
    user: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'subscriptions.user_id',
        to: 'users.id',
      },
    },
    payment: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Payment,
      join: {
        from: 'subscriptions.payment_id',
        to: 'payments.id',
      },
    },
  };
}
