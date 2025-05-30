import { Injectable } from '@nestjs/common';
import { Offer } from 'src/models/offer.model';

@Injectable()
export class OffersService {
  async findAll() {
    return await Offer.query();
  }

  async findOne(id: number) {
    return await Offer.query().findById(id);
  }

  async create(offerData: Partial<Offer>) {
    if (offerData.id) {
      return await Offer.query().findById(offerData.id).patch(offerData);
    }
    return await Offer.query().insert(offerData);
  }

  async delete(id: number) {
    return await Offer.query().deleteById(id);
  }
}
