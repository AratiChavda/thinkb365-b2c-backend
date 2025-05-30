import { Injectable } from '@nestjs/common';
import { Addons } from 'src/models/addons.model';

@Injectable()
export class AddonsService {
  async findAll() {
    return await Addons.query();
  }

  async findOne(id: number) {
    return await Addons.query().findById(id);
  }

  async create(addonsData: Partial<Addons>) {
    if (addonsData.id) {
      return await Addons.query().findById(addonsData.id).patch(addonsData);
    }
    return await Addons.query().insert(addonsData);
  }

  async delete(id: number) {
    return await Addons.query().deleteById(id);
  }
}
