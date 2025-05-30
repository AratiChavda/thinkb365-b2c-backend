import { BaseModel } from './base.model';

export class Offer extends BaseModel {
  static tableName = 'offers';

  name!: string;
  description!: string;
  discount_type!: 'percentage' | 'fixed';
  discount_value!: number;
  applies_to!: 'bundle' | 'addon' | 'product';
  start_date!: Date;
  end_date!: Date;
  is_active!: boolean;
}
