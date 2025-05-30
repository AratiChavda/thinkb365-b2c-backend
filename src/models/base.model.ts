import { Model } from 'objection';

export class BaseModel extends Model {
  id!: number;
  createdAt?: Date;
  updatedAt?: Date;
}
