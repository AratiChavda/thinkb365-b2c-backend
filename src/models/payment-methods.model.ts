import { BaseModel } from './base.model';
import { User } from './user.model';

export class PaymentMethod extends BaseModel {
  static tableName = 'payment_methods';

  user_id!: number;
  method_type!: 'CARD' | 'UPI' | 'PAYPAL' | 'BANK_ACCOUNT';
  card_last4?: string;
  card_brand?: string;
  card_exp_month?: number;
  card_exp_year?: number;
  upi_id?: string;
  paypal_email?: string;
  bank_account_last4?: string;
  bank_name?: string;
  is_default: boolean = false;
  created_at!: Date;

  static relationMappings = {
    user: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'subscriptions.user_id',
        to: 'users.id',
      },
    },
  };
}
