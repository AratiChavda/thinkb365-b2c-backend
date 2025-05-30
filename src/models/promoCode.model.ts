import { BaseModel } from './base.model';

export class PromoCode extends BaseModel {
  static tableName = 'promo_codes';

  code!: string;
  description!: string;
  discount_type!: 'percentage' | 'fixed';
  discount_value!: number;
  usage_limit!: number;
  used_count!: number;
  min_purchase!: number;
  start_date!: Date;
  end_date!: Date;
  is_active!: boolean;
}
