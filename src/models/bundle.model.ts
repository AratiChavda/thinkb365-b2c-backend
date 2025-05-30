import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Brand } from './brand.model';
import { Offer } from './offer.model';

export class Bundle extends BaseModel {
  static tableName = 'bundles';

  name!: string;
  description!: string;
  brand_id!: number;
  bundle_type!:
    | 'individual'
    | 'family'
    | 'corporate'
    | 'student'
    | 'trial'
    | 'promotional';
  pricing: number;
  billing_period: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  billing_cycle_length!: number;
  trial_period_days?: number;
  is_active!: boolean;
  max_users!: number;
  cancellation_policy?: string;
  is_cancellable!: boolean;
  cancellation_notice_days?: number;
  cancellation_fee?: number;
  lock_in_period_days!: number;
  cancellation_rules?: any;
  offer_id!: number;
  static relationMappings = {
    brands: {
      relation: Model.BelongsToOneRelation,
      modelClass: Brand,
      join: {
        from: 'bundles.brand_id',
        to: 'brands.id',
      },
    },
    offers: {
      relation: Model.BelongsToOneRelation,
      modelClass: Offer,
      join: {
        from: 'bundles.offer_id',
        to: 'offers.id',
      },
    },
  };
}
