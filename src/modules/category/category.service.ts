import { Injectable } from '@nestjs/common';
import { Category } from 'src/models/category.model';

@Injectable()
export class CategoryService {
  async findAll() {
    return await Category.query();
  }

  async findOne(id: number) {
    return await Category.query().findById(id);
  }

  async create(categoryData: Partial<Category>) {
    if (categoryData.id) {
      return await Category.query()
        .findById(categoryData.id)
        .patch(categoryData);
    }
    return await Category.query().insert(categoryData);
  }

  async delete(id: number) {
    return await Category.query().deleteById(id);
  }
}
