import { Injectable } from '@nestjs/common';
import { PromoCode } from 'src/models/promoCode.model';

@Injectable()
export class PromoCodeService {
  async findAll() {
    return await PromoCode.query();
  }

  async findOne(id: number) {
    return await PromoCode.query().findById(id);
  }

  async create(promoCodeData: Partial<PromoCode>) {
    if (promoCodeData.id) {
      return await PromoCode.query()
        .findById(promoCodeData.id)
        .patch(promoCodeData);
    }
    return await PromoCode.query().insert(promoCodeData);
  }

  async delete(id: number) {
    return await PromoCode.query().deleteById(id);
  }
}
