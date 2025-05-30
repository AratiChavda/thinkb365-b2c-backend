import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Bundle } from './bundle.model';
import { Product } from './product.model';

export class BundleProducts extends BaseModel {
  static tableName = 'bundle_products';

  bundle_id!: string;
  product_id!: string;
  quantity!: number;
  static relationMappings = {
    bundle: {
      relation: Model.BelongsToOneRelation,
      modelClass: Bundle,
      join: {
        from: 'bundle_products.bundle_id',
        to: 'bundle.id',
      },
    },
    products: {
      relation: Model.BelongsToOneRelation,
      modelClass: Product,
      join: {
        from: 'bundle_products.product_id',
        to: 'products.id',
      },
    },
  };
}
