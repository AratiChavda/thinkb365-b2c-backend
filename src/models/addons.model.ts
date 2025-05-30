import { BaseModel } from './base.model';

export class Addons extends BaseModel {
  static tableName = 'addons';

  name!: string;
  description!: string;
  pricing!: number;
  billing_period!: 'monthly' | 'yearly';
  billing_cycle_length!: number;
  max_users!: number;
  is_active!: boolean;
}
