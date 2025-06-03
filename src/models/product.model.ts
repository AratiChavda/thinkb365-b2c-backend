import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Brand } from './brand.model';
import { Category } from './category.model';

export class Product extends BaseModel {
  static tableName = 'products';

  name!: string;
  brand_id!: number;
  category_id!: number;
  description!: string;
  is_active!: boolean;
  type!: 'print' | 'digital' | 'print_and_digital';
  image!: string;

  static relationMappings = {
    brand: {
      relation: Model.BelongsToOneRelation,
      modelClass: Brand,
      join: {
        from: 'products.brand_id',
        to: 'brands.id',
      },
    },
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: Category,
      join: {
        from: 'products.category_id',
        to: 'categories.id',
      },
    },
  };
}
