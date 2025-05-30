import { BaseModel } from './base.model';

export class Category extends BaseModel {
  static tableName = 'categories';

  name!: string;
  description?: string;
}
