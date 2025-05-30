import { BaseModel } from './base.model';

export class User extends BaseModel {
  static tableName = 'users';

  name!: string;
  email!: string;
  password!: string;
  role!: 'ADMINISTRATOR' | 'SUBSCRIBER' | 'HOUSEHOLD_SUBSCRIBER';
  admin_id?: number;

  static relationMappings = () => ({
    administrator: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'users.admin_id',
        to: 'users.id',
      },
    },
    subscribers: {
      relation: BaseModel.HasManyRelation,
      modelClass: User,
      join: {
        from: 'users.id',
        to: 'users.admin_id',
      },
    },
  });
}
