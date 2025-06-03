import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductsService {
  async findAll() {
    return await Product.query().withGraphFetched('[brand, category]');
  }

  async findOne(id: number) {
    return await Product.query().findById(id);
  }

  async create(productData: Partial<Product>) {
    if (productData.id) {
      return await Product.query().findById(productData.id).patch(productData);
    }
    return await Product.query().insert(productData);
  }

  async delete(id: number) {
    return await Product.query().deleteById(id);
  }
}
