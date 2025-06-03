import { Injectable } from '@nestjs/common';
import { Bundle } from 'src/models/bundle.model';

@Injectable()
export class BundleService {
  async findAll() {
    return await Bundle.query()
      .select('bundles.*')
      .select(
        Bundle.relatedQuery('bundleProducts').count().as('products_count'),
      )
      .withGraphFetched('[brand, offer]');
  }

  async findOne(id: number) {
    return await Bundle.query().findById(id);
  }

  async create(bundleData: Partial<Bundle>) {
    if (bundleData.id) {
      return await Bundle.query().findById(bundleData.id).patch(bundleData);
    }
    return await Bundle.query().insert(bundleData);
  }

  async delete(id: number) {
    return await Bundle.query().deleteById(id);
  }
}
