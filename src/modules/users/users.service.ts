import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.model';

@Injectable()
export class UsersService {
  async findAll() {
    return await User.query();
  }

  async findOne(id: number) {
    const user = await User.query().findById(id);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async create(userData: Partial<User>) {
    if (userData.id) {
      return await User.query().findById(userData.id).patch(userData);
    }
    return await User.query().insert(userData);
  }

  async delete(id: number) {
    return await User.query().deleteById(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await User.query().findOne({ email });
    return user ?? undefined;
  }

  async findByAdminId(adminId: number) {
    return await User.query().where('admin_id', adminId);
  }
}
