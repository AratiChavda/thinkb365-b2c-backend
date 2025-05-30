import { Injectable } from '@nestjs/common';
import { Brand } from 'src/models/brand.model';

@Injectable()
export class BrandService {
  async findAll() {
    return await Brand.query();
  }

  async findOne(id: number) {
    return await Brand.query().findById(id);
  }

  async create(brandData: Partial<Brand>) {
    if (brandData.id) {
      return await Brand.query().findById(brandData.id).patch(brandData);
    }
    return await Brand.query().insert(brandData);
  }

  async delete(id: number) {
    return await Brand.query().deleteById(id);
  }
}
