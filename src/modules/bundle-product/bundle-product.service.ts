import { Injectable } from '@nestjs/common';
import { BundleProducts } from 'src/models/bundle-product.model';

@Injectable()
export class BundleProductService {
  async findAll() {
    return await BundleProducts.query();
  }

  async findOne(id: number) {
    return await BundleProducts.query().findById(id);
  }

  async create(bundleProductsData: Partial<BundleProducts>) {
    if (bundleProductsData.id) {
      return await BundleProducts.query()
        .findById(bundleProductsData.id)
        .patch(bundleProductsData);
    }
    return await BundleProducts.query().insert(bundleProductsData);
  }

  async delete(id: number) {
    return await BundleProducts.query().deleteById(id);
  }
}
