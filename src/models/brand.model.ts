import { BaseModel } from './base.model';

export class Brand extends BaseModel {
  static tableName = 'brands';

  name!: string;
  description?: string;
  password!: string;
  logo_url?: string;
}
