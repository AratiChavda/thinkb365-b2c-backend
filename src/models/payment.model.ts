import { BaseModel } from './base.model';
import { User } from './user.model';

export class Payment extends BaseModel {
  static tableName = 'payments';

  user_id!: number;
  method!: 'CARD' | 'UPI' | 'PAYPAL' | 'BANK_TRANSFER';
  transaction_id!: string;
  amount!: number;
  status!: 'SUCCESS' | 'FAILED' | 'PENDING';
  paid_at!: Date;

  static relationMappings = {
    user: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'payments.user_id',
        to: 'users.id',
      },
    },
  };
}
